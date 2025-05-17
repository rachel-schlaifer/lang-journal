"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Lock } from "lucide-react"
import Link from "next/link"

interface ProgressLockProps {
  requiredCards: number
  completedCards: number
}

export function ProgressLock({ requiredCards, completedCards }: ProgressLockProps) {
  const progress = (completedCards / requiredCards) * 100

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-6 rounded-full bg-muted p-4">
        <Lock className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="mb-2 text-xl font-bold">Content Locked</h3>
      <p className="mb-6 text-muted-foreground">
        Complete {requiredCards - completedCards} more flashcards to unlock this article
      </p>

      <div className="mb-4 w-full max-w-md">
        <div className="mb-2 flex justify-between text-sm">
          <span>{completedCards} completed</span>
          <span>{requiredCards} required</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Button asChild>
        <Link href="/">Review Flashcards</Link>
      </Button>
    </div>
  )
}
