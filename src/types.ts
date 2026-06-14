export interface Flashcard {
  id: string
  front: string
  back: string
  setName: string
  images?: string[] // filenames in /public/flashcards/, shown with the answer
  attemptCount: number
  consecutiveCorrect: number
  lastAttempted: string | null
}

export type FlashcardSet = 'all' | 'unlearned' | 'learning' | 'learned'

// Rezultat samoocjenjivanja po grupi (postotak 0–100).
export interface ExamScore {
  group: string
  latest: number
  best: number
  date: string // ISO datum zadnjeg pokušaja
}
