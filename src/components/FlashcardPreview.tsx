import { useState } from 'react'
import { RotateCcw } from 'lucide-react'
import Badge from './ui/Badge'
import Button from './ui/Button'
import FlashcardImages from './FlashcardImages'

interface FlashcardPreviewProps {
  front: string
  back: string
  setName: string
  images?: string[]
}

export default function FlashcardPreview({ front, back, setName, images }: FlashcardPreviewProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-[#555555]">
          Pregled (kako Luka vidi karticu)
        </span>
        <Button size="sm" variant="ghost" onClick={() => setFlipped(f => !f)}>
          <RotateCcw size={13} aria-hidden="true" />
          {flipped ? 'Pitanje' : 'Odgovor'}
        </Button>
      </div>

      <div
        role="button"
        tabIndex={0}
        aria-label={flipped ? 'Prikaži pitanje' : 'Prikaži odgovor'}
        onClick={() => setFlipped(f => !f)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setFlipped(f => !f)
          }
        }}
        className="flip-card w-full cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
      >
        <div className={`flip-card-inner ${flipped ? 'is-flipped' : ''}`}>
          {/* Prednja strana */}
          <div className="flip-face overflow-hidden rounded-md border border-[#E0E0E0] bg-[#F7F7F7]">
            <div className="flex items-center justify-between border-b border-[#E0E0E0] px-4 py-2">
              <span className="text-xs text-[#555555]">Pitanje</span>
              <Badge variant="muted">{setName || 'Bez skupa'}</Badge>
            </div>
            <div className="min-h-[120px] px-4 py-6">
              <p className="text-sm text-[#111111] whitespace-pre-wrap">
                {front || 'Pitanje (prednja strana)'}
              </p>
            </div>
          </div>

          {/* Stražnja strana */}
          <div className="flip-face flip-face-back overflow-hidden rounded-md border border-[#E0E0E0] bg-white">
            <div className="border-b border-[#E0E0E0] px-4 py-2">
              <span className="text-xs text-[#555555]">Odgovor</span>
            </div>
            <div className="flex min-h-[120px] flex-col gap-3 px-4 py-6">
              <p className="text-sm text-[#111111] whitespace-pre-wrap">
                {back || 'Odgovor (stražnja strana)'}
              </p>
              <FlashcardImages images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
