"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, X } from "lucide-react"
import { translateWord } from "@/lib/openai"

interface TooltipTranslateProps {
  word: string
  position: { x: number; y: number }
  onClose: () => void
}

export function TooltipTranslate({ word, position, onClose }: TooltipTranslateProps) {
  const [translation, setTranslation] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTranslation = async () => {
      setIsLoading(true)
      try {
        const result = await translateWord(word)
        setTranslation(result)
      } catch (error) {
        console.error("Translation error:", error)
        setTranslation("Translation error")
      } finally {
        setIsLoading(false)
      }
    }

    if (word) {
      fetchTranslation()
    }
  }, [word])

  const handleAddToFlashcards = () => {
    // Implementation for adding to flashcards
    console.log("Adding to flashcards:", { word, translation })
    onClose()
  }

  return (
    <Card
      className="absolute z-10 p-3 shadow-lg w-64"
      style={{
        left: `${position.x}px`,
        top: `${position.y + 10}px`,
        transform: "translateX(-50%)",
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold">{word}</h4>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="mb-3">
        {isLoading ? (
          <div className="h-4 w-full bg-muted animate-pulse rounded"></div>
        ) : (
          <p className="text-sm">{translation}</p>
        )}
      </div>

      <Button size="sm" className="w-full" onClick={handleAddToFlashcards} disabled={isLoading}>
        <Plus className="mr-2 h-4 w-4" />
        Add to Flashcards
      </Button>
    </Card>
  )
}
