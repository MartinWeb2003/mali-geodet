import React, { useEffect } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  size?: 'md' | 'lg'
  children: React.ReactNode
}

export default function Modal({ open, onClose, title, size = 'md', children }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  const maxWidth = size === 'lg' ? 'max-w-3xl' : 'max-w-md'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`relative z-10 w-full ${maxWidth} max-h-[88vh] overflow-y-auto rounded-md border border-[#E0E0E0] bg-white p-6 shadow-sm`}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 id="modal-title" className="text-base font-semibold tracking-tight text-[#111111]">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Zatvori"
            className="rounded p-1 hover:bg-[#F7F7F7] focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
          >
            <X size={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
