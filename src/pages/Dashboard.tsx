import { useNavigate } from 'react-router-dom'
import { BookOpen, ClipboardList, CheckCircle, BookMarked, Volume2, FileText } from 'lucide-react'
import { useFlashcardStore } from '../store/flashcardStore'
import { useTestStore } from '../store/testStore'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

export default function Dashboard() {
  document.title = 'Početna — Geodezija'
  const cards = useFlashcardStore(s => s.cards)
  const lastResult = useTestStore(s => s.lastResult)()
  const navigate = useNavigate()

  const total = cards.length
  const learned = cards.filter(c => c.consecutiveCorrect >= 2).length
  const learning = cards.filter(c => c.attemptCount > 0 && c.consecutiveCorrect < 2).length

  const razbudiMe = () => {
    const audio = new Audio(`${import.meta.env.BASE_URL}jumpscare.mp3`)
    audio.volume = 1
    audio.play().catch(() => {})
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Dobrodošao, Luka.</h1>
        <p className="mt-1 text-sm text-[#555555]">Ovo je tvoj dashboard za učenje geodezije.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <div className="flex items-start gap-3">
            <BookOpen size={18} className="mt-0.5 shrink-0 text-[#555555]" aria-hidden="true" />
            <div>
              <p className="text-sm text-[#555555]">Ukupno kartica</p>
              <p className="mt-1 text-2xl font-semibold text-[#111111]">{total}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-3">
            <CheckCircle size={18} className="mt-0.5 shrink-0 text-[#1A7A1A]" aria-hidden="true" />
            <div>
              <p className="text-sm text-[#555555]">Naučeno</p>
              <p className="mt-1 text-2xl font-semibold text-[#111111]">{learned}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-3">
            <BookMarked size={18} className="mt-0.5 shrink-0 text-[#555555]" aria-hidden="true" />
            <div>
              <p className="text-sm text-[#555555]">U učenju</p>
              <p className="mt-1 text-2xl font-semibold text-[#111111]">{learning}</p>
            </div>
          </div>
        </Card>
      </div>

      {lastResult && (
        <Card>
          <div className="flex items-center gap-3">
            <ClipboardList size={18} className="shrink-0 text-[#555555]" aria-hidden="true" />
            <div>
              <p className="text-sm text-[#555555]">Zadnja provjera znanja</p>
              <p className="mt-0.5 text-sm font-medium text-[#111111]">
                {lastResult.group}: <span className="text-[#111111]">{lastResult.latest}%</span>
                <span className="text-[#555555]"> (najbolje {lastResult.best}%)</span>
              </p>
            </div>
          </div>
        </Card>
      )}

      <div>
        <h2 className="mb-3 text-sm font-semibold tracking-tight text-[#111111]">Brze radnje</h2>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => navigate('/kartice/ucenje')}>
            <BookOpen size={15} aria-hidden="true" />
            Uči kartice
          </Button>
          <Button variant="secondary" onClick={() => navigate('/test')}>
            <ClipboardList size={15} aria-hidden="true" />
            Pokreni test
          </Button>
          <Button variant="secondary" onClick={() => navigate('/pdf')}>
            <FileText size={15} aria-hidden="true" />
            Čitaj pdf
          </Button>
          <Button variant="secondary" onClick={razbudiMe}>
            <Volume2 size={15} aria-hidden="true" />
            Razbudi me :)
          </Button>
        </div>
      </div>
    </div>
  )
}
