import { Flashcard, ExamScore } from '../types'

const FLASHCARDS_KEY = 'luka_flashcards'
const EXAM_SCORES_KEY = 'luka_exam_scores'
const SEED_VERSION_KEY = 'luka_seed_version'

export function loadSeedVersion(): string | null {
  return localStorage.getItem(SEED_VERSION_KEY)
}

export function saveSeedVersion(version: string): void {
  localStorage.setItem(SEED_VERSION_KEY, version)
}

export function loadFlashcards(): Flashcard[] {
  try {
    const raw = localStorage.getItem(FLASHCARDS_KEY)
    return raw ? (JSON.parse(raw) as Flashcard[]) : []
  } catch {
    return []
  }
}

export function saveFlashcards(cards: Flashcard[]): void {
  localStorage.setItem(FLASHCARDS_KEY, JSON.stringify(cards))
}

export function loadExamScores(): Record<string, ExamScore> {
  try {
    const raw = localStorage.getItem(EXAM_SCORES_KEY)
    return raw ? (JSON.parse(raw) as Record<string, ExamScore>) : {}
  } catch {
    return {}
  }
}

export function saveExamScores(scores: Record<string, ExamScore>): void {
  localStorage.setItem(EXAM_SCORES_KEY, JSON.stringify(scores))
}
