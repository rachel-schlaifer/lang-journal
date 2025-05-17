import { NextResponse } from "next/server"
import { calculateNextReview, getNextReviewDate } from "@/lib/srs"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.flashcardId || body.quality === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, this would fetch the flashcard from Supabase
    // For demo purposes, use mock data
    const mockFlashcard = {
      id: body.flashcardId,
      previousInterval: body.previousInterval || 0,
      previousEaseFactor: body.previousEaseFactor || 2.5,
    }

    // Calculate next review using SM-2 algorithm
    const reviewResult = calculateNextReview({
      quality: body.quality,
      previousInterval: mockFlashcard.previousInterval,
      previousEaseFactor: mockFlashcard.previousEaseFactor,
    })

    // Calculate next review date
    const nextReviewDate = getNextReviewDate(reviewResult.nextInterval)

    // In a real app, this would update the flashcard in Supabase
    // and create a new review record

    return NextResponse.json({
      data: {
        flashcardId: mockFlashcard.id,
        nextInterval: reviewResult.nextInterval,
        newEaseFactor: reviewResult.newEaseFactor,
        nextReviewDate: nextReviewDate,
        isGraduated: reviewResult.isGraduated,
      },
    })
  } catch (error) {
    console.error("Error recording review:", error)
    return NextResponse.json({ error: "Failed to record review" }, { status: 500 })
  }
}
