import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, XCircle, RotateCcw, Search, FileText } from 'lucide-react'
import { useFlashcardStore } from '../store/flashcardStore'
import { Flashcard } from '../types'
import Button from '../components/ui/Button'
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

const QUESTIONS_PER_SESSION = 3

export default function IzmjeraUsmeni() {
  document.title = 'Izmjera Usmeni — Geodezija'
  const cards = useFlashcardStore(s => s.cards)
  const izmjeraCards = cards.filter(c => c.setName === 'Izmjera')
  const navigate = useNavigate()

  const [phase, setPhase] = useState<Phase>('home')
  const [queue, setQueue] = useState<Flashcard[]>([])
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const [results, setResults] = useState<boolean[]>([])

  const start = useCallback(() => {
    setQueue(shuffle(izmjeraCards).slice(0, QUESTIONS_PER_SESSION))
    setIndex(0)
    setRevealed(false)
    setFlipped(false)
    setResults([])
    setPhase('exam')
  }, [izmjeraCards])

  const answer = (passed: boolean) => {
    const updated = [...results, passed]
    if (index + 1 >= queue.length) {
      setResults(updated)
      setPhase('done')
    } else {
      setResults(updated)
      setIndex(index + 1)
      setRevealed(false)
      setFlipped(false)
    }
  }

  const card = queue[index]
  const passed = results.filter(Boolean).length

  // ---------------------------------------------------------------- Home
  if (phase === 'home') {
    return (
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Izmjera — Usmeni ispit</h1>
          <p className="mt-1 text-sm text-[#555555]">
            Dobit ćeš {QUESTIONS_PER_SESSION} nasumično odabrana pitanja iz gradiva Izmjere. Pročitaj pitanje,
            razmisli, pa otkrij odgovor i sam procijeni jesi li znao.
          </p>
        </div>

        {izmjeraCards.length === 0 ? (
          <p className="text-sm text-[#555555]">Nema Izmjera kartica. Provjeri jesu li kartice učitane.</p>
        ) : (
          <Button onClick={start} className="w-full sm:max-w-xs">
            Pokreni usmeni ispit
          </Button>
        )}

        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" onClick={() => navigate('/kartice/pregled')}>
            <Search size={15} aria-hidden="true" />
            Pregledaj kartice
          </Button>
          <Button variant="secondary" onClick={() => navigate('/pdf?file=izmjera.pdf')}>
            <FileText size={15} aria-hidden="true" />
            Čitaj PDF
          </Button>
        </div>
      </div>
    )
  }

  // ---------------------------------------------------------------- Done
  if (phase === 'done') {
    return (
      <div className="flex flex-col gap-8 max-w-xl">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Ispit završen</h1>
          <p className="mt-1 text-sm text-[#555555]">Evo tvojih rezultata, Luka.</p>
        </div>

        <div className="rounded-md border border-[#E0E0E0] overflow-hidden">
          {queue.map((q, i) => (
            <div
              key={q.id}
              className={`flex items-start gap-3 px-4 py-4 ${i > 0 ? 'border-t border-[#E0E0E0]' : ''}`}
            >
              {results[i] ? (
                <CheckCircle size={18} className="shrink-0 mt-0.5 text-[#1A7A1A]" aria-hidden="true" />
              ) : (
                <XCircle size={18} className="shrink-0 mt-0.5 text-[#CC0000]" aria-hidden="true" />
              )}
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-[#111111]">{q.front}</p>
                <p className="text-xs text-[#555555]">{results[i] ? 'Znao si' : 'Nisi znao'}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 rounded-md border border-[#E0E0E0] px-5 py-4">
          <span className="text-3xl font-semibold text-[#111111]">{passed}/{QUESTIONS_PER_SESSION}</span>
          <span className="text-sm text-[#555555]">
            {passed === QUESTIONS_PER_SESSION
              ? 'Odlično! Sve si znao.'
              : passed === 0
              ? 'Ponovi gradivo i pokušaj opet.'
              : 'Solidno — ponovi što nisi znao.'}
          </span>
        </div>

        <div className="flex gap-3 flex-wrap">
          <Button onClick={start}>
            <RotateCcw size={15} aria-hidden="true" />
            Nova pitanja
          </Button>
          <Button variant="secondary" onClick={() => setPhase('home')}>
            Natrag
          </Button>
        </div>
      </div>
    )
  }

  // ---------------------------------------------------------------- Exam
  if (!card) return null

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight text-[#111111]">Izmjera — Usmeni</h1>
        <span className="text-sm text-[#555555]">
          {index + 1} / {queue.length}
        </span>
      </div>

      {/* Card */}
      <div
        role="button"
        tabIndex={0}
        aria-label={flipped ? 'Prikaži pitanje' : 'Prikaži odgovor'}
        onClick={() => {
          if (!revealed) {
            setRevealed(true)
            setFlipped(true)
          } else {
            setFlipped(f => !f)
          }
        }}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            if (!revealed) { setRevealed(true); setFlipped(true) }
            else setFlipped(f => !f)
          }
        }}
        className="flip-card w-full cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
      >
        <div className={`flip-card-inner ${flipped ? 'is-flipped' : ''}`}>
          {/* Prednja strana */}
          <div className="flip-face rounded-md border border-[#E0E0E0] bg-[#F7F7F7] overflow-hidden">
            <div className="border-b border-[#E0E0E0] px-6 py-3">
              <span className="text-xs text-[#555555]">Pitanje</span>
            </div>
            <div className="px-6 py-8 min-h-[160px]">
              <p className="text-base text-[#111111]">{card.front}</p>
            </div>
            <div className="border-t border-[#E0E0E0] px-6 py-2 text-xs text-[#555555]">
              Klikni za odgovor
            </div>
          </div>

          {/* Stražnja strana */}
          <div className="flip-face flip-face-back rounded-md border border-[#E0E0E0] bg-white overflow-hidden">
            <div className="border-b border-[#E0E0E0] px-6 py-3">
              <span className="text-xs text-[#555555]">Odgovor</span>
            </div>
            <div className="px-6 py-8 min-h-[160px] flex flex-col gap-4">
              <p className="text-base text-[#111111] whitespace-pre-wrap">{card.back}</p>
              <FlashcardImages images={card.images} />
            </div>
            <div className="border-t border-[#E0E0E0] px-6 py-2 text-xs text-[#555555]">
              Klikni za pitanje
            </div>
          </div>
        </div>
      </div>

      {!revealed ? (
        <Button onClick={() => { setRevealed(true); setFlipped(true) }}>
          Otkrij odgovor
        </Button>
      ) : (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#555555]">Jesi li znao odgovor?</p>
          <div className="flex gap-3">
            <Button onClick={() => answer(true)} className="flex-1">
              <CheckCircle size={15} aria-hidden="true" />
              Znao sam
            </Button>
            <Button variant="secondary" onClick={() => answer(false)} className="flex-1">
              <XCircle size={15} aria-hidden="true" />
              Nisam znao
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
