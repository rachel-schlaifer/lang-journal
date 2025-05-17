import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { CreateFlashcardForm } from "@/components/create-flashcard-form"

export default function NewFlashcardPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/flashcards">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Create New Flashcard</h1>
        </div>

        <CreateFlashcardForm />
      </div>
    </div>
  )
}
