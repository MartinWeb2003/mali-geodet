import { create } from 'zustand'
import { ExamScore } from '../types'
import { loadExamScores, saveExamScores } from '../lib/localStorage'

interface TestStore {
  scores: Record<string, ExamScore>
  init: () => void
  saveScore: (group: string, score: number) => void
  getScore: (group: string) => ExamScore | undefined
  lastResult: () => ExamScore | null
}

export const useTestStore = create<TestStore>((set, get) => ({
  scores: {},

  init() {
    set({ scores: loadExamScores() })
  },

  saveScore(group, score) {
    const existing = get().scores[group]
    const entry: ExamScore = {
      group,
      latest: score,
      best: existing ? Math.max(existing.best, score) : score,
      date: new Date().toISOString(),
    }
    const scores = { ...get().scores, [group]: entry }
    saveExamScores(scores)
    set({ scores })
  },

  getScore(group) {
    return get().scores[group]
  },

  lastResult() {
    const all = Object.values(get().scores)
    if (all.length === 0) return null
    return all.reduce((latest, s) => (s.date > latest.date ? s : latest))
  },
}))
