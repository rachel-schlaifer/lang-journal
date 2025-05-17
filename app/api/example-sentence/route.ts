import { NextResponse } from "next/server"
import { createExampleSentence } from "@/lib/openai"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.word) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get language with default
    const language = body.language || "French"
    const translation = body.translation || ""

    // Generate example sentence for the word in ${language}
    // Pass language context when needed in the future
    console.log(`Generating example for ${body.word} in ${language}`)
    const exampleSentence = await createExampleSentence(body.word, translation)

    return NextResponse.json({ data: { exampleSentence } })
  } catch (error) {
    console.error("Error generating example sentence:", error)
    return NextResponse.json({ error: "Failed to generate example sentence" }, { status: 500 })
  }
}
