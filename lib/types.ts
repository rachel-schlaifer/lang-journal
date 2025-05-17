export interface Flashcard {
  id: string
  front: string
  back: string
  example?: string
  deckId: string
  isFavorite: boolean
  createdAt: Date
  lastReviewedAt?: Date
  nextReviewAt?: Date
  reviewHistory: ReviewRecord[]
}

export interface ReviewRecord {
  id: string
  flashcardId: string
  reviewedAt: Date
  quality: number // 0-5 rating from SM-2 algorithm
  interval: number // Days until next review
  easeFactor: number // SM-2 ease factor
}

export interface Deck {
  id: string
  name: string
  description?: string
  userId: string
  createdAt: Date
  updatedAt: Date
}

// Article Types
export interface Article {
  id: string
  title: string
  content: string
  source: string
  language: string
  readingTime: number
  imageUrl?: string
  publishedAt: Date
  savedAt?: Date
  readProgress: number
  isLocked: boolean
  requiredCards?: number
}

// User Types
export interface User {
  id: string
  email: string
  name?: string
  targetLanguage: string
  nativeLanguage: string
  dailyGoal: number
  streak: number
  longestStreak: number
}

// API Response Types
export interface ApiResponse<T> {
  data?: T
  error?: string
}
