import { useState, useCallback } from 'react'
import { ClipboardList, Trophy, History } from 'lucide-react'
import { useFlashcardStore } from '../store/flashcardStore'
import { useTestStore } from '../store/testStore'
import { Flashcard } from '../types'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import FlashcardImages from '../components/FlashcardImages'

type Phase = 'home' | 'exam' | 'done'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Test() {
  document.title = 'Provjera znanja — Geodezija'
  const cards = useFlashcardStore(s => s.cards)
  const { saveScore, getScore } = useTestStore()

  const groups = Array.from(new Set(cards.map(c => c.setName))).sort()

  const [phase, setPhase] = useState<Phase>('home')
  const [examGroup, setExamGroup] = useState('')
  const [queue, setQueue] = useState<Flashcard[]>([])
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [scores, setScores] = useState<number[]>([])
  const [currentScore, setCurrentScore] = useState(50)
  const [finalTotal, setFinalTotal] = useState(0)

  const startExam = useCallback(() => {
    const available = groups.filter(g => cards.some(c => c.setName === g))
    if (available.length === 0) return
    const group = available[Math.floor(Math.random() * available.length)]
    setExamGroup(group)
    setQueue(shuffle(cards.filter(c => c.setName === group)))
    setIndex(0)
    setRevealed(false)
    setScores([])
    setCurrentScore(50)
    setPhase('exam')
  }, [groups, cards])

  const nextQuestion = () => {
    const updated = [...scores, currentScore]
    if (index + 1 >= queue.length) {
      const total = Math.round(updated.reduce((a, b) => a + b, 0) / updated.length)
      saveScore(examGroup, total)
      setFinalTotal(total)
      setPhase('done')
    } else {
      setScores(updated)
      setIndex(index + 1)
      setRevealed(false)
      setCurrentScore(50)
    }
  }

  // ---------------------------------------------------------------- Home
  if (phase === 'home') {
    return (
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Provjera znanja</h1>
          <p className="mt-1 text-sm text-[#555555]">
            Pokreni provjeru i dobit ćeš sva pitanja iz jedne nasumično odabrane grupe. Za svako pitanje sam
            sebi daj ocjenu od 1 do 100, a na kraju dobivaš ukupni postotak.
          </p>
        </div>

        {groups.length === 0 ? (
          <p className="text-sm text-[#555555]">Nemaš još nijednu karticu, Luka.</p>
        ) : (
          <>
            <Button onClick={startExam} className="w-full sm:max-w-xs">
              <ClipboardList size={15} aria-hidden="true" />
              Pokreni provjeru znanja
            </Button>

            <div>
              <h2 className="mb-3 text-sm font-semibold tracking-tight text-[#111111]">Rezultati po grupama</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {groups.map(group => {
                  const score = getScore(group)
                  return (
                    <Card key={group} className="flex flex-col gap-3">
                      <h3 className="font-semibold tracking-tight text-[#111111]">{group}</h3>
                      {score ? (
                        <div className="flex flex-col gap-1.5 text-sm">
                          <div className="flex items-center gap-2 text-[#555555]">
                            <History size={14} aria-hidden="true" />
                            <span>Zadnji rezultat:</span>
                            <span className="font-medium text-[#111111]">{score.latest}%</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#555555]">
                            <Trophy size={14} aria-hidden="true" />
                            <span>Najbolji rezultat:</span>
                            <span className="font-medium text-[#1A7A1A]">{score.best}%</span>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-[#555555]">Još nema rezultata.</p>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    )
  }

  // ---------------------------------------------------------------- Exam
  if (phase === 'exam') {
    const card = queue[index]
    if (!card) return null
    return (
      <div className="flex flex-col gap-6 max-w-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold tracking-tight text-[#111111]">Provjera znanja</h1>
            <Badge variant="muted">{examGroup}</Badge>
          </div>
          <span className="text-sm text-[#555555]">
            {index + 1} / {queue.length} pitanja
          </span>
        </div>

        <div className="rounded-md border border-[#E0E0E0] bg-[#F7F7F7] overflow-hidden">
          <div className="border-b border-[#E0E0E0] px-6 py-3">
            <span className="text-xs text-[#555555]">Pitanje</span>
          </div>
          <div className="px-6 py-8 min-h-[120px]">
            <p className="text-base text-[#111111]">{card.front}</p>
          </div>

          {revealed && (
            <>
              <div className="border-t border-[#E0E0E0] px-6 py-3">
                <span className="text-xs text-[#555555]">Točan odgovor</span>
              </div>
              <div className="px-6 py-8 border-t border-[#E0E0E0] bg-white flex flex-col gap-4">
                <p className="text-base text-[#111111] whitespace-pre-wrap">{card.back}</p>
                <FlashcardImages images={card.images} />
              </div>
            </>
          )}
        </div>

        {!revealed ? (
          <Button onClick={() => setRevealed(true)}>Prikaži točan odgovor</Button>
        ) : (
          <div className="flex flex-col gap-4 rounded-md border border-[#E0E0E0] bg-white p-6">
            <div className="flex items-center justify-between">
              <label htmlFor="score" className="text-sm font-medium text-[#111111]">
                Koliko si točno odgovorio?
              </label>
              <span className="text-2xl font-semibold text-[#111111]">{currentScore}%</span>
            </div>
            <input
              id="score"
              type="range"
              min={1}
              max={100}
              value={currentScore}
              onChange={e => setCurrentScore(Number(e.target.value))}
              className="w-full accent-black"
            />
            <Button onClick={nextQuestion}>
              {index + 1 >= queue.length ? 'Završi provjeru' : 'Sljedeće pitanje'}
            </Button>
          </div>
        )}
      </div>
    )
  }

  // ---------------------------------------------------------------- Done
  const best = getScore(examGroup)?.best ?? finalTotal
  return (
    <div className="flex flex-col gap-8 max-w-xl">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Provjera završena</h1>
        <p className="mt-1 text-sm text-[#555555]">Grupa: {examGroup}</p>
      </div>

      <Card className="flex flex-col items-center gap-2 py-10">
        <p className="text-sm text-[#555555]">Tvoj ukupni rezultat</p>
        <p className="text-5xl font-semibold tracking-tight text-[#111111]">{finalTotal}%</p>
        <div className="mt-2 flex items-center gap-2 text-sm text-[#555555]">
          <Trophy size={14} aria-hidden="true" />
          <span>Najbolji rezultat za ovu grupu:</span>
          <span className="font-medium text-[#1A7A1A]">{best}%</span>
        </div>
      </Card>

      <div className="flex gap-3">
        <Button onClick={startExam}>Nova provjera</Button>
        <Button variant="secondary" onClick={() => setPhase('home')}>
          Natrag
        </Button>
      </div>
    </div>
  )
}
