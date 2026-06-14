import { ExternalLink } from 'lucide-react'
import Button from '../components/ui/Button'

const PDF_FILE = 'ispit.pdf'
const pdfUrl = `${import.meta.env.BASE_URL}${PDF_FILE}`

export default function PdfReader() {
  document.title = 'Čitaj PDF — Geodezija'

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Čitaj PDF</h1>
          <p className="mt-1 text-sm text-[#555555]">{PDF_FILE}</p>
        </div>
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            <ExternalLink size={15} aria-hidden="true" />
            Otvori u novoj kartici
          </Button>
        </a>
      </div>

      <object
        data={pdfUrl}
        type="application/pdf"
        className="w-full h-[calc(100vh-180px)] rounded-md border border-[#E0E0E0] bg-white"
      >
        <embed src={pdfUrl} type="application/pdf" className="w-full h-full" />
      </object>

      <p className="text-sm text-[#555555]">
        Ako se PDF ne prikazuje, provjeri je li datoteka{' '}
        <span className="font-mono">{PDF_FILE}</span> spremljena u <span className="font-mono">public/</span>{' '}
        mapi, ili je{' '}
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="underline">
          otvori u novoj kartici
        </a>
        .
      </p>
    </div>
  )
}
