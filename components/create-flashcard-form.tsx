"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles } from "lucide-react"
import { createExampleSentence } from "@/lib/openai"

export function CreateFlashcardForm() {
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")
  const [example, setExample] = useState("")
  const [deck, setDeck] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateExample = async () => {
    if (!front || !back) return

    setIsGenerating(true)
    try {
      const generatedExample = await createExampleSentence(front, back)
      setExample(generatedExample)
    } catch (error) {
      console.error("Failed to generate example:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implementation for creating a flashcard
    console.log({ front, back, example, deck })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="front">Front (Word or Phrase)</Label>
            <Input
              id="front"
              placeholder="Enter word or phrase in target language"
              value={front}
              onChange={(e) => setFront(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="back">Back (Translation)</Label>
            <Input
              id="back"
              placeholder="Enter translation in your language"
              value={back}
              onChange={(e) => setBack(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="example">Example Sentence</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleGenerateExample}
                disabled={isGenerating || !front || !back}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {isGenerating ? "Generating..." : "Generate Example"}
              </Button>
            </div>
            <Textarea
              id="example"
              placeholder="Enter or generate an example sentence using this word/phrase"
              value={example}
              onChange={(e) => setExample(e.target.value)}
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="deck">Deck</Label>
            <Select value={deck} onValueChange={setDeck}>
              <SelectTrigger id="deck">
                <SelectValue placeholder="Select a deck" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic Vocabulary</SelectItem>
                <SelectItem value="phrases">Common Phrases</SelectItem>
                <SelectItem value="grammar">Grammar Rules</SelectItem>
                <SelectItem value="new">+ Create New Deck</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button type="submit">Create Flashcard</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
