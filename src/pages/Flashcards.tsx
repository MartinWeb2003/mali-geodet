import { useNavigate } from 'react-router-dom'
import { BookOpen, Search } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useFlashcardStore } from '../store/flashcardStore'

export default function Flashcards() {
  document.title = 'Kartice — Geodezija'
  const navigate = useNavigate()
  const cards = useFlashcardStore(s => s.cards)
  const total = cards.length
  const learned = cards.filter(c => c.consecutiveCorrect >= 2).length
  const learning = cards.filter(c => c.attemptCount > 0 && c.consecutiveCorrect < 2).length
  const unlearned = cards.filter(c => c.attemptCount === 0).length

  const modes = [
    {
      icon: BookOpen,
      title: 'Učenje',
      description: 'Uči kartice jednu po jednu. Označi što znaš, a što ne.',
      action: () => navigate('/kartice/ucenje'),
      primary: true,
    },
    {
      icon: Search,
      title: 'Pregled karica',
      description: 'Pregledaj, dodaj, uredi ili obriši kartice.',
      action: () => navigate('/kartice/pregled'),
      primary: false,
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Kartice</h1>
        <p className="mt-1 text-sm text-[#555555]">
          {total} kartica ukupno &mdash; {learned} naučeno, {learning} u učenju, {unlearned} nenaučeno
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {modes.map(({ icon: Icon, title, description, action, primary }) => (
          <Card key={title} className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <Icon size={18} className="mt-0.5 shrink-0 text-[#555555]" aria-hidden="true" />
              <div>
                <h2 className="font-semibold tracking-tight text-[#111111]">{title}</h2>
                <p className="mt-1 text-sm text-[#555555]">{description}</p>
              </div>
            </div>
            <Button variant={primary ? 'primary' : 'secondary'} onClick={action}>
              Otvori
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
