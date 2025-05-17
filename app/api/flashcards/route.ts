import { NextResponse } from "next/server"
import type { Flashcard } from "@/lib/types"

export async function GET(request: Request) {
  // Get query parameters
  const { searchParams } = new URL(request.url)
  const due = searchParams.get("due")
  const deckId = searchParams.get("deckId")
  const favorite = searchParams.get("favorite")

  // In a real app, this would query Supabase
  // For demo purposes, return mock data
  const mockFlashcards: Flashcard[] = [
    {
      id: "1",
      front: "Bonjour",
      back: "Hello",
      example: "Bonjour, comment ça va?",
      deckId: "basic",
      isFavorite: true,
      createdAt: new Date(),
      lastReviewedAt: new Date(Date.now() - 86400000), // 1 day ago
      nextReviewAt: new Date(Date.now() + 86400000), // 1 day from now
      reviewHistory: [],
    },
    {
      id: "2",
      front: "Au revoir",
      back: "Goodbye",
      example: "Au revoir, à bientôt!",
      deckId: "basic",
      isFavorite: false,
      createdAt: new Date(),
      lastReviewedAt: new Date(Date.now() - 172800000), // 2 days ago
      nextReviewAt: new Date(Date.now() + 172800000), // 2 days from now
      reviewHistory: [],
    },
    // Add more mock flashcards as needed
  ]

  // Filter based on query parameters
  let filteredFlashcards = [...mockFlashcards]

  if (due === "today") {
    filteredFlashcards = filteredFlashcards.filter(
      (card) => card.nextReviewAt && card.nextReviewAt <= new Date(Date.now() + 86400000),
    )
  }

  if (deckId) {
    filteredFlashcards = filteredFlashcards.filter((card) => card.deckId === deckId)
  }

  if (favorite === "true") {
    filteredFlashcards = filteredFlashcards.filter((card) => card.isFavorite)
  }

  return NextResponse.json({ data: filteredFlashcards })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.front || !body.back || !body.deckId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, this would create a record in Supabase
    // For demo purposes, return the created flashcard with a mock ID
    const newFlashcard: Flashcard = {
      id: crypto.randomUUID(),
      front: body.front,
      back: body.back,
      example: body.example,
      deckId: body.deckId,
      isFavorite: body.isFavorite || false,
      createdAt: new Date(),
      reviewHistory: [],
    }

    return NextResponse.json({ data: newFlashcard })
  } catch (error) {
    console.error("Error creating flashcard:", error)
    return NextResponse.json({ error: "Failed to create flashcard" }, { status: 500 })
  }
}
