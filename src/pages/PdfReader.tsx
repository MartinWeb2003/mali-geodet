import { ExternalLink } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import Button from '../components/ui/Button'

const FILES = [
  { key: 'ispit.pdf', label: 'Ispit (grupe A–D)' },
  { key: 'izmjera.pdf', label: 'Izmjera' },
]

const DEFAULT_FILE = 'ispit.pdf'

export default function PdfReader() {
  const [params, setParams] = useSearchParams()
  const file = params.get('file') || DEFAULT_FILE
  const pdfUrl = `${import.meta.env.BASE_URL}${file}`
  document.title = 'Čitaj PDF — Geodezija'

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Čitaj PDF</h1>
        <div className="flex items-center gap-2">
          <div className="flex rounded-md border border-[#E0E0E0] overflow-hidden">
            {FILES.map(f => (
              <button
                key={f.key}
                onClick={() => setParams({ file: f.key })}
                className={`px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 ${
                  file === f.key
                    ? 'bg-black text-white font-medium'
                    : 'bg-white text-[#111111] hover:bg-[#F7F7F7]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">
              <ExternalLink size={15} aria-hidden="true" />
              Nova kartica
            </Button>
          </a>
        </div>
      </div>

      <object
        key={file}
        data={pdfUrl}
        type="application/pdf"
        className="w-full h-[calc(100vh-160px)] rounded-md border border-[#E0E0E0] bg-white"
      >
        <embed src={pdfUrl} type="application/pdf" className="w-full h-full" />
      </object>
    </div>
  )
}
