import { useEffect, useState } from 'react'
import { ImageOff, X, ZoomIn } from 'lucide-react'

function imageSrc(file: string): string {
  return `${import.meta.env.BASE_URL}flashcards/${file}`
}

function FlashcardImage({ file, onZoom }: { file: string; onZoom: (file: string) => void }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="flex items-center gap-2 rounded-md border border-dashed border-[#E0E0E0] bg-[#F7F7F7] px-4 py-6 text-sm text-[#555555]">
        <ImageOff size={16} aria-hidden="true" />
        <span>
          Slika nije dostupna: <span className="font-mono">{file}</span>
        </span>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={e => {
        e.stopPropagation()
        onZoom(file)
      }}
      onKeyDown={e => e.stopPropagation()}
      aria-label={`Povećaj sliku: ${file}`}
      className="group relative block w-full overflow-hidden rounded-md border border-[#E0E0E0] bg-white focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
    >
      <img src={imageSrc(file)} alt={file} onError={() => setError(true)} className="w-full" />
      <span className="absolute right-2 top-2 flex items-center gap-1 rounded bg-black/70 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
        <ZoomIn size={12} aria-hidden="true" />
        Povećaj
      </span>
    </button>
  )
}

function Lightbox({ file, onClose }: { file: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
      onClick={e => {
        e.stopPropagation()
        onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Povećana slika"
    >
      <button
        type="button"
        onClick={e => {
          e.stopPropagation()
          onClose()
        }}
        aria-label="Zatvori"
        className="absolute right-4 top-4 rounded p-2 text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
      >
        <X size={20} />
      </button>
      <img
        src={imageSrc(file)}
        alt={file}
        onClick={e => e.stopPropagation()}
        className="max-h-[90vh] max-w-full rounded-md bg-white object-contain"
      />
    </div>
  )
}

export default function FlashcardImages({ images }: { images?: string[] }) {
  const [zoomed, setZoomed] = useState<string | null>(null)

  if (!images || images.length === 0) return null

  return (
    <div className="flex flex-col gap-3">
      {images.map(file => (
        <FlashcardImage key={file} file={file} onZoom={setZoomed} />
      ))}
      {zoomed && <Lightbox file={zoomed} onClose={() => setZoomed(null)} />}
    </div>
  )
}
