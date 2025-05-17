import { NextResponse } from "next/server"
import type { Article } from "@/lib/types"

export async function GET(request: Request) {
  // Get query parameters
  const { searchParams } = new URL(request.url)
  const language = searchParams.get("language") || "french"
  const saved = searchParams.get("saved") === "true"

  // In a real app, this would fetch articles from a news API or RSS feed
  // For demo purposes, return mock data
  const mockArticles: Article[] = [
    {
      id: "1",
      title: "Les dernières tendances économiques en Europe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      source: "Le Monde",
      language: "french",
      readingTime: 5,
      imageUrl: "/placeholder.svg",
      publishedAt: new Date(),
      readProgress: 30,
      isLocked: false,
    },
    {
      id: "2",
      title: "Festivals culturels cet été",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      source: "Le Figaro",
      language: "french",
      readingTime: 8,
      imageUrl: "/placeholder.svg",
      publishedAt: new Date(),
      readProgress: 0,
      isLocked: true,
      requiredCards: 5,
    },
    {
      id: "3",
      title: "Nouvelles découvertes scientifiques",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
      source: "Science et Vie",
      language: "french",
      readingTime: 10,
      imageUrl: "/placeholder.svg",
      publishedAt: new Date(),
      readProgress: 0,
      isLocked: true,
      requiredCards: 10,
    },
    // Add more mock articles as needed
  ]

  // Filter based on query parameters
  let filteredArticles = [...mockArticles]

  if (language) {
    filteredArticles = filteredArticles.filter((article) => article.language === language)
  }

  if (saved) {
    // In a real app, this would filter by user's saved articles
    filteredArticles = filteredArticles.filter((article) => article.savedAt !== undefined)
  }

  return NextResponse.json({ data: filteredArticles })
}
