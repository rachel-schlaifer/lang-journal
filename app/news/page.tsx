import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Bookmark, Search } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Daily News</h1>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search articles..." className="w-full bg-background pl-8" />
          </div>
        </div>

        <Tabs defaultValue="latest">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="latest" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="h-40 rounded-md bg-muted"></div>
                      <h3 className="font-semibold">Article Title {i}</h3>
                      <p className="text-sm text-muted-foreground">Short description of the article content</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{i + 4} min read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {i % 3 === 0 ? (
                            <>
                              <Progress value={0} className="h-2 w-16" />
                              <span className="text-xs text-muted-foreground">Locked</span>
                            </>
                          ) : (
                            <>
                              <Progress value={i * 10} className="h-2 w-16" />
                              <span className="text-xs text-muted-foreground">{i * 10}%</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between pt-2">
                        <Button variant="outline" size="sm">
                          <Bookmark className="mr-2 h-4 w-4" />
                          Save
                        </Button>
                        <Button size="sm" asChild>
                          <Link href={`/article/${i}`}>Read</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="saved" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2].map((i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="h-40 rounded-md bg-muted"></div>
                      <h3 className="font-semibold">Saved Article {i}</h3>
                      <p className="text-sm text-muted-foreground">Short description of the saved article</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{i + 3} min read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Progress value={i * 25} className="h-2 w-16" />
                          <span className="text-xs text-muted-foreground">{i * 25}%</span>
                        </div>
                      </div>
                      <div className="flex justify-end pt-2">
                        <Button size="sm" asChild>
                          <Link href={`/article/${i}`}>Continue</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="completed" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1].map((i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="h-40 rounded-md bg-muted"></div>
                      <h3 className="font-semibold">Completed Article {i}</h3>
                      <p className="text-sm text-muted-foreground">You&apos;ve read this article completely</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">5 min read</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Progress value={100} className="h-2 w-16" />
                          <span className="text-xs text-muted-foreground">100%</span>
                        </div>
                      </div>
                      <div className="flex justify-end pt-2">
                        <Button size="sm" asChild>
                          <Link href={`/article/${i}`}>Review</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
