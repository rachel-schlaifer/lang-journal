"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export function DeckList() {
  // Example decks
  const decks = [
    {
      id: 1,
      name: "Basic Vocabulary",
      description: "Essential words for beginners",
      totalCards: 50,
      dueCards: 12,
      progress: 65,
    },
    {
      id: 2,
      name: "Common Phrases",
      description: "Everyday expressions and idioms",
      totalCards: 30,
      dueCards: 8,
      progress: 40,
    },
    {
      id: 3,
      name: "Grammar Rules",
      description: "Important grammar concepts",
      totalCards: 25,
      dueCards: 5,
      progress: 20,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {decks.map((deck) => (
        <Card key={deck.id}>
          <CardHeader>
            <CardTitle>{deck.name}</CardTitle>
            <CardDescription>{deck.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium">{deck.progress}%</span>
              </div>
              <Progress value={deck.progress} className="h-2" />
              <div className="flex justify-between text-sm">
                <div>
                  <p className="font-medium">{deck.totalCards}</p>
                  <p className="text-muted-foreground">Total Cards</p>
                </div>
                <div>
                  <p className="font-medium">{deck.dueCards}</p>
                  <p className="text-muted-foreground">Due Today</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href={`/flashcards/deck/${deck.id}`}>View Deck</Link>
            </Button>
            <Button asChild>
              <Link href={`/flashcards/deck/${deck.id}/review`}>Review</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
