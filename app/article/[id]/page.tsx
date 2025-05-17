import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, BookmarkCheck } from "lucide-react"
import Link from "next/link"
import { ArticleViewer } from "@/components/article-viewer"
import { ProgressLock } from "@/components/progress-lock"
import { PageProps } from "@/.next/types/app/page"

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params
  const articleId = resolvedParams?.id
  const isLocked = articleId === "3"

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/news">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Article Title {articleId}</h1>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <BookmarkCheck className="mr-2 h-4 w-4" />
              Saved
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Reading Progress:</span>
            <Progress value={60} className="h-2 w-24" />
            <span className="text-sm font-medium">60%</span>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            {isLocked ? <ProgressLock requiredCards={5} completedCards={2} /> : <ArticleViewer articleId={articleId} />}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
