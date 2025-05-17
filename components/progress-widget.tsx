"use client"

import { Progress } from "@/components/ui/progress"

export function ProgressWidget() {
  // Example data
  const dailyGoal = 20
  const completedToday = 12
  const percentage = (completedToday / dailyGoal) * 100

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Daily Flashcard Goal</span>
        <span className="text-sm font-medium">
          {completedToday}/{dailyGoal}
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
      <div className="grid grid-cols-3 gap-4 pt-4">
        <div className="flex flex-col items-center justify-center rounded-lg border p-3">
          <span className="text-xl font-bold">12</span>
          <span className="text-xs text-muted-foreground">Reviewed</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-3">
          <span className="text-xl font-bold">8</span>
          <span className="text-xs text-muted-foreground">Remaining</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border p-3">
          <span className="text-xl font-bold">3</span>
          <span className="text-xs text-muted-foreground">New</span>
        </div>
      </div>
    </div>
  )
}
