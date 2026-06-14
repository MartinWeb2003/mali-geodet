import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Plus, Pencil, Trash2, Image as ImageIcon } from 'lucide-react'
import { useFlashcardStore } from '../store/flashcardStore'
import { Flashcard } from '../types'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Modal from '../components/ui/Modal'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import FlashcardPreview from '../components/FlashcardPreview'

function setLabel(card: Flashcard): 'success' | 'warning' | 'muted' {
  if (card.consecutiveCorrect >= 2) return 'success'
  if (card.attemptCount > 0) return 'warning'
  return 'muted'
}

function setName(card: Flashcard): string {
  if (card.consecutiveCorrect >= 2) return 'Naučeno'
  if (card.attemptCount > 0) return 'Učim'
  return 'Nenaučeno'
}

export default function FlashcardBrowse() {
  document.title = 'Pregled karica — Geodezija'
  const navigate = useNavigate()
  const { cards, addCard, updateCard, deleteCard } = useFlashcardStore()

  const [addOpen, setAddOpen] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const [newFront, setNewFront] = useState('')
  const [newBack, setNewBack] = useState('')
  const [newSet, setNewSet] = useState('')
  const [newImages, setNewImages] = useState('')

  const [editFront, setEditFront] = useState('')
  const [editBack, setEditBack] = useState('')
  const [editSet, setEditSet] = useState('')
  const [editImages, setEditImages] = useState('')

  const parseImages = (value: string): string[] =>
    value
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)

  const handleAdd = () => {
    if (!newFront.trim() || !newBack.trim()) return
    addCard(newFront.trim(), newBack.trim(), newSet.trim() || 'Općenito', parseImages(newImages))
    setNewFront('')
    setNewBack('')
    setNewSet('')
    setNewImages('')
    setAddOpen(false)
  }

  const openEdit = (card: Flashcard) => {
    setEditId(card.id)
    setEditFront(card.front)
    setEditBack(card.back)
    setEditSet(card.setName)
    setEditImages((card.images ?? []).join(', '))
  }

  const handleEdit = () => {
    if (!editId || !editFront.trim() || !editBack.trim()) return
    updateCard(editId, {
      front: editFront.trim(),
      back: editBack.trim(),
      setName: editSet.trim() || 'Općenito',
      images: parseImages(editImages),
    })
    setEditId(null)
  }

  const handleDelete = () => {
    if (!deleteId) return
    deleteCard(deleteId)
    setDeleteId(null)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/kartice')}
            aria-label="Natrag"
            className="rounded p-1 hover:bg-[#F7F7F7] focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
          >
            <ArrowLeft size={16} />
          </button>
          <h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Pregled karica</h1>
        </div>
        <Button onClick={() => setAddOpen(true)}>
          <Plus size={15} aria-hidden="true" />
          Dodaj karticu
        </Button>
      </div>

      {cards.length === 0 ? (
        <p className="text-sm text-[#555555]">Nemaš još nijednu karticu, Luka. Dodaj prvu!</p>
      ) : (
        <div className="rounded-md border border-[#E0E0E0] overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-[#E0E0E0] bg-[#F7F7F7]">
                <th className="px-4 py-3 text-left font-medium text-[#555555]">Pitanje</th>
                <th className="px-4 py-3 text-left font-medium text-[#555555]">Odgovor</th>
                <th className="px-4 py-3 text-left font-medium text-[#555555]">Skup</th>
                <th className="px-4 py-3 text-left font-medium text-[#555555]">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {cards.map((card, i) => (
                <tr key={card.id} className={`border-b border-[#E0E0E0] ${i % 2 === 0 ? 'bg-white' : 'bg-[#F7F7F7]/40'}`}>
                  <td className="px-4 py-3 max-w-[220px] truncate text-[#111111]">{card.front}</td>
                  <td className="px-4 py-3 max-w-[220px] text-[#555555]">
                    <div className="flex items-center gap-2">
                      <span className="truncate">{card.back}</span>
                      {card.images && card.images.length > 0 && (
                        <span
                          className="flex shrink-0 items-center gap-1 text-[#555555]"
                          title={`${card.images.length} slika`}
                        >
                          <ImageIcon size={14} aria-hidden="true" />
                          {card.images.length}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#555555]">{card.setName}</td>
                  <td className="px-4 py-3">
                    <Badge variant={setLabel(card)}>{setName(card)}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 justify-end">
                      <button
                        onClick={() => openEdit(card)}
                        aria-label="Uredi"
                        className="rounded p-1.5 hover:bg-[#E0E0E0] focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => setDeleteId(card.id)}
                        aria-label="Obriši"
                        className="rounded p-1.5 hover:bg-[#E0E0E0] focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 text-[#CC0000]"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add modal */}
      <Modal open={addOpen} onClose={() => setAddOpen(false)} title="Dodaj karticu" size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <Textarea
              label="Pitanje (prednja strana)"
              value={newFront}
              onChange={e => setNewFront(e.target.value)}
              rows={3}
              placeholder="Unesi pitanje..."
            />
            <Textarea
              label="Odgovor (stražnja strana)"
              value={newBack}
              onChange={e => setNewBack(e.target.value)}
              rows={3}
              placeholder="Unesi odgovor..."
            />
            <Input
              label="Naziv skupa"
              value={newSet}
              onChange={e => setNewSet(e.target.value)}
              placeholder="npr. Grupa A, Grupa B..."
            />
            <Input
              label="Slike (nazivi datoteka, odvojeni zarezom)"
              value={newImages}
              onChange={e => setNewImages(e.target.value)}
              placeholder="npr. skica.png, formule.png"
            />
            <div className="flex gap-2 justify-end">
              <Button variant="secondary" onClick={() => setAddOpen(false)}>Odustani</Button>
              <Button onClick={handleAdd} disabled={!newFront.trim() || !newBack.trim()}>Spremi</Button>
            </div>
          </div>
          <FlashcardPreview
            front={newFront}
            back={newBack}
            setName={newSet}
            images={parseImages(newImages)}
          />
        </div>
      </Modal>

      {/* Edit modal */}
      <Modal open={!!editId} onClose={() => setEditId(null)} title="Uredi karticu" size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <Textarea
              label="Pitanje (prednja strana)"
              value={editFront}
              onChange={e => setEditFront(e.target.value)}
              rows={3}
            />
            <Textarea
              label="Odgovor (stražnja strana)"
              value={editBack}
              onChange={e => setEditBack(e.target.value)}
              rows={3}
            />
            <Input
              label="Naziv skupa"
              value={editSet}
              onChange={e => setEditSet(e.target.value)}
            />
            <Input
              label="Slike (nazivi datoteka, odvojeni zarezom)"
              value={editImages}
              onChange={e => setEditImages(e.target.value)}
              placeholder="npr. skica.png, formule.png"
            />
            <div className="flex gap-2 justify-end">
              <Button variant="secondary" onClick={() => setEditId(null)}>Odustani</Button>
              <Button onClick={handleEdit} disabled={!editFront.trim() || !editBack.trim()}>Spremi</Button>
            </div>
          </div>
          <FlashcardPreview
            front={editFront}
            back={editBack}
            setName={editSet}
            images={parseImages(editImages)}
          />
        </div>
      </Modal>

      {/* Delete confirm modal */}
      <Modal open={!!deleteId} onClose={() => setDeleteId(null)} title="Obriši karticu">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#555555]">Jesi li siguran da želiš obrisati ovu karticu? Ova radnja se ne može poništiti.</p>
          <div className="flex gap-2 justify-end">
            <Button variant="secondary" onClick={() => setDeleteId(null)}>Odustani</Button>
            <Button onClick={handleDelete} className="bg-[#CC0000] hover:opacity-80">Obriši</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
