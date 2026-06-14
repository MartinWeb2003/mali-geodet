import { create } from 'zustand'
import { Flashcard, FlashcardSet } from '../types'
import { loadFlashcards, saveFlashcards, loadSeedVersion, saveSeedVersion } from '../lib/localStorage'
import { flashcards as seedData } from '../data/flashcards'

// Promijeni ovu vrijednost kad se sjeme kartica značajno promijeni — pri
// neslaganju verzije spremljene kartice se zamjenjuju novim sjemenom.
const SEED_VERSION = 'geodezija-izmjera-1'

function generateId(): string {
  return `card-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

interface FlashcardStore {
  cards: Flashcard[]
  init: () => void
  addCard: (front: string, back: string, setName: string, images?: string[]) => void
  updateCard: (
    id: string,
    updates: Partial<Pick<Flashcard, 'front' | 'back' | 'setName' | 'images'>>,
  ) => void
  deleteCard: (id: string) => void
  recordAttempt: (id: string, correct: boolean) => void
  getBySet: (set: FlashcardSet) => Flashcard[]
}

export const useFlashcardStore = create<FlashcardStore>((set, get) => ({
  cards: [],

  init() {
    if (loadSeedVersion() !== SEED_VERSION) {
      saveFlashcards(seedData)
      saveSeedVersion(SEED_VERSION)
      set({ cards: seedData })
      return
    }
    set({ cards: loadFlashcards() })
  },

  addCard(front, back, setName, images) {
    const card: Flashcard = {
      id: generateId(),
      front,
      back,
      setName,
      images: images && images.length > 0 ? images : undefined,
      attemptCount: 0,
      consecutiveCorrect: 0,
      lastAttempted: null,
    }
    const cards = [...get().cards, card]
    saveFlashcards(cards)
    set({ cards })
  },

  updateCard(id, updates) {
    const cards = get().cards.map(c => (c.id === id ? { ...c, ...updates } : c))
    saveFlashcards(cards)
    set({ cards })
  },

  deleteCard(id) {
    const cards = get().cards.filter(c => c.id !== id)
    saveFlashcards(cards)
    set({ cards })
  },

  recordAttempt(id, correct) {
    const cards = get().cards.map(c => {
      if (c.id !== id) return c
      const consecutiveCorrect = correct ? c.consecutiveCorrect + 1 : 0
      return {
        ...c,
        attemptCount: c.attemptCount + 1,
        consecutiveCorrect,
        lastAttempted: new Date().toISOString(),
      }
    })
    saveFlashcards(cards)
    set({ cards })
  },

  getBySet(set) {
    const cards = get().cards
    switch (set) {
      case 'all':
        return cards
      case 'unlearned':
        return cards.filter(c => c.attemptCount === 0)
      case 'learning':
        return cards.filter(c => c.attemptCount > 0 && c.consecutiveCorrect < 2)
      case 'learned':
        return cards.filter(c => c.consecutiveCorrect >= 2)
    }
  },
}))
