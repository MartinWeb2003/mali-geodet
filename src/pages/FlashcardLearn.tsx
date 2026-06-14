import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import { useFlashcardStore } from '../store/flashcardStore'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import FlashcardImages from '../components/FlashcardImages'

type Phase = 'select' | 'study' | 'done'

export default function FlashcardLearn() {
  document.title = 'Učenje kartica — Geodezija'
  const navigate = useNavigate()
  const cards = useFlashcardStore(s => s.cards)
  const recordAttempt = useFlashcardStore(s => s.recordAttempt)

  const groups = Array.from(new Set(cards.map(c => c.setName))).sort()

  const [selectedGroup, setSelectedGroup] = useState<string>('')
  const [phase, setPhase] = useState<Phase>('select')
  const [queue, setQueue] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [hasSeenBack, setHasSeenBack] = useState(false)

  const activeGroup = selectedGroup || groups[0] || ''
  const groupCards = cards.filter(c => c.setName === activeGroup)

  const flip = () => {
    setFlipped(f => {
      if (!f) setHasSeenBack(true)
      return !f
    })
  }

  const startSession = useCallback(() => {
    const sessionCards = cards.filter(c => c.setName === activeGroup)
    if (sessionCards.length === 0) return
    setQueue(sessionCards.map(c => c.id))
    setCurrentIndex(0)
    setFlipped(false)
    setHasSeenBack(false)
    setPhase('study')
  }, [activeGroup, cards])

  const handleAnswer = (correct: boolean) => {
    const id = queue[currentIndex]
    recordAttempt(id, correct)
    const next = currentIndex + 1
    if (next >= queue.length) {
      setPhase('done')
    } else {
      setCurrentIndex(next)
      setFlipped(false)
      setHasSeenBack(false)
    }
  }

  const currentCard = phase === 'study' ? cards.find(c => c.id === queue[currentIndex]) : null

  if (phase === 'select') {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/kartice')}
            aria-label="Natrag"
            className="rounded p-1 hover:bg-[#F7F7F7] focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
          >
            <ArrowLeft size={16} />
          </button>
          <h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Učenje</h1>
        </div>

        <div className="flex flex-col gap-4 max-w-sm">
          {groups.length === 0 ? (
            <p className="text-sm text-[#555555]">Nemaš još nijednu karticu, Luka.</p>
          ) : (
            <>
              <p className="text-sm text-[#555555]">Odaberi grupu za učenje:</p>
              <div className="flex flex-col gap-2">
                {groups.map(group => {
                  const count = cards.filter(c => c.setName === group).length
                  const isActive = activeGroup === group
                  return (
                    <button
                      key={group}
                      onClick={() => setSelectedGroup(group)}
                      className={`flex items-center justify-between rounded-md border px-4 py-3 text-sm text-left transition-colors focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 ${
                        isActive
                          ? 'border-black bg-black text-white'
                          : 'border-[#E0E0E0] bg-white text-[#111111] hover:border-black'
                      }`}
                    >
                      <span>{group}</span>
                      <span className={isActive ? 'text-white/70' : 'text-[#555555]'}>
                        {count} kartica
                      </span>
                    </button>
                  )
                })}
              </div>
              <Button onClick={startSession} disabled={groupCards.length === 0}>
                Počni učenje
              </Button>
            </>
          )}
        </div>
      </div>
    )
  }

  if (phase === 'done') {
    return (
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Sesija završena</h1>
        <p className="text-sm text-[#555555]">
          Prošao si kroz sve kartice u ovoj sesiji. Odličan posao, Luka!
        </p>
        <div className="flex gap-3">
          <Button onClick={() => { setPhase('select'); setFlipped(false); setHasSeenBack(false) }}>
            <RotateCcw size={15} aria-hidden="true" />
            Ponovi
          </Button>
          <Button variant="secondary" onClick={() => navigate('/kartice')}>
            Natrag na kartice
          </Button>
        </div>
      </div>
    )
  }

  if (!currentCard) return null

  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/kartice')}
            aria-label="Natrag"
            className="rounded p-1 hover:bg-[#F7F7F7] focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
          >
            <ArrowLeft size={16} />
          </button>
          <h1 className="text-xl font-semibold tracking-tight text-[#111111]">Učenje</h1>
        </div>
        <span className="text-sm text-[#555555]">
          {currentIndex + 1} / {queue.length} kartica
        </span>
      </div>

      <div
        role="button"
        tabIndex={0}
        aria-label={flipped ? 'Prikaži pitanje' : 'Prikaži odgovor'}
        onClick={flip}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            flip()
          }
        }}
        className="flip-card w-full cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
      >
        <div className={`flip-card-inner ${flipped ? 'is-flipped' : ''}`}>
          {/* Prednja strana — pitanje */}
          <div className="flip-face rounded-md border border-[#E0E0E0] bg-[#F7F7F7] overflow-hidden">
            <div className="border-b border-[#E0E0E0] px-6 py-3 flex items-center justify-between">
              <span className="text-xs text-[#555555]">Pitanje</span>
              <Badge variant="muted">{currentCard.setName}</Badge>
            </div>
            <div className="px-6 py-8 min-h-[160px]">
              <p className="text-base text-[#111111]">{currentCard.front}</p>
            </div>
            <div className="border-t border-[#E0E0E0] px-6 py-2 text-xs text-[#555555]">
              Klikni za okretanje
            </div>
          </div>

          {/* Stražnja strana — odgovor */}
          <div className="flip-face flip-face-back rounded-md border border-[#E0E0E0] bg-white overflow-hidden">
            <div className="border-b border-[#E0E0E0] px-6 py-3">
              <span className="text-xs text-[#555555]">Odgovor</span>
            </div>
            <div className="px-6 py-8 min-h-[160px] flex flex-col gap-4">
              <p className="text-base text-[#111111] whitespace-pre-wrap">{currentCard.back}</p>
              <FlashcardImages images={currentCard.images} />
            </div>
            <div className="border-t border-[#E0E0E0] px-6 py-2 text-xs text-[#555555]">
              Klikni za okretanje
            </div>
          </div>
        </div>
      </div>

      {!hasSeenBack ? (
        <Button onClick={flip}>Otkrij odgovor</Button>
      ) : (
        <div className="flex gap-3">
          <Button onClick={() => handleAnswer(true)} className="flex-1">
            Znao sam
          </Button>
          <Button variant="secondary" onClick={() => handleAnswer(false)} className="flex-1">
            Nisam znao
          </Button>
        </div>
      )}
    </div>
  )
}
