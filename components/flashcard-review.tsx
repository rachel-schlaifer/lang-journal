"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, RotateCcw, Star } from "lucide-react"

export function FlashcardReview() {
  const [showAnswer, setShowAnswer] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  // Example flashcards
  const flashcards = [
    {
      id: 1,
      front: "Bonjour",
      back: "Hello",
      example: "Bonjour, comment ça va?",
    },
    {
      id: 2,
      front: "Au revoir",
      back: "Goodbye",
      example: "Au revoir, à bientôt!",
    },
    {
      id: 3,
      front: "Merci",
      back: "Thank you",
      example: "Merci beaucoup pour votre aide.",
    },
  ]

  const currentCard = flashcards[currentIndex]

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setShowAnswer(false)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setShowAnswer(false)
    }
  }

  const handleFlip = () => {
    setShowAnswer(!showAnswer)
  }

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Card {currentIndex + 1} of {flashcards.length}
        </span>
        <Button variant="outline" size="icon" onClick={handleFavorite}>
          <Star className={`h-4 w-4 ${isFavorite ? "fill-yellow-400 text-yellow-400" : ""}`} />
        </Button>
      </div>

      <Card className="h-64 cursor-pointer" onClick={handleFlip}>
        <CardContent className="flex items-center justify-center h-full p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{showAnswer ? currentCard.back : currentCard.front}</h3>
            {showAnswer && <p className="text-muted-foreground italic">&quot;{currentCard.example}&quot;</p>}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" size="icon" onClick={handlePrevious} disabled={currentIndex === 0}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={handleFlip}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Flip
          </Button>
        </div>
        <Button variant="outline" size="icon" onClick={handleNext} disabled={currentIndex === flashcards.length - 1}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
