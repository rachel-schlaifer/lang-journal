interface ReviewParams {
  quality: number // 0-5 rating (0=complete blackout, 5=perfect recall)
  previousInterval: number // Previous interval in days
  previousEaseFactor: number // Previous ease factor
}

interface ReviewResult {
  nextInterval: number // Next interval in days
  newEaseFactor: number // New ease factor
  isGraduated: boolean // Whether the card has graduated from learning
}

/**
 * Calculate the next review interval using the SM-2 algorithm
 */
export function calculateNextReview({ quality, previousInterval, previousEaseFactor }: ReviewParams): ReviewResult {
  // Ensure quality is between 0 and 5
  const q = Math.max(0, Math.min(5, quality))

  // Default ease factor if none provided
  const prevEF = previousEaseFactor || 2.5

  // Calculate new ease factor
  // EF := EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  const newEaseFactor = Math.max(
    1.3, // Minimum ease factor
    prevEF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)),
  )

  let nextInterval: number
  let isGraduated = false

  // If quality < 3, start over (card not learned)
  if (q < 3) {
    nextInterval = 1 // Reset to 1 day
  } else {
    // Card is considered learned
    isGraduated = true

    // Calculate next interval based on previous interval
    if (previousInterval === 0) {
      nextInterval = 1 // First successful review
    } else if (previousInterval === 1) {
      nextInterval = 6 // Second successful review
    } else {
      // For subsequent reviews, multiply the previous interval by the ease factor
      nextInterval = Math.round(previousInterval * newEaseFactor)
    }
  }

  return {
    nextInterval,
    newEaseFactor,
    isGraduated,
  }
}

/**
 * Get the due date for the next review
 */
export function getNextReviewDate(interval: number): Date {
  const nextDate = new Date()
  nextDate.setDate(nextDate.getDate() + interval)
  return nextDate
}

/**
 * Check if a flashcard is due for review
 */
export function isDue(nextReviewDate: Date): boolean {
  return new Date() >= nextReviewDate
}
