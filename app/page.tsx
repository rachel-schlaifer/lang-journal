import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"
import { FlashcardReview } from "@/components/flashcard-review"
import { ProgressWidget } from "@/components/progress-widget"

export default function Dashboard() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button asChild>
            <Link href="/flashcards/new">Create Flashcard</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Today&apos;s Progress</CardTitle>
              <CardDescription>Track your daily learning goals</CardDescription>
            </CardHeader>
            <CardContent>
              <ProgressWidget />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Streak</CardTitle>
              <CardDescription>You&apos;re on a 7-day streak!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>Current Streak</span>
                </div>
                <span className="font-bold">7 days</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                  <span>Longest Streak</span>
                </div>
                <span className="font-bold">14 days</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>Study Time Today</span>
                </div>
                <span className="font-bold">25 minutes</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="due">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="due">Due Today</TabsTrigger>
            <TabsTrigger value="mistakes">Mistakes</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>
          <TabsContent value="due" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Due Today</CardTitle>
                <CardDescription>You have 12 cards to review today</CardDescription>
              </CardHeader>
              <CardContent>
                <FlashcardReview />
              </CardContent>
              <CardFooter>
                <Button className="w-full">Review All</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="mistakes" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Mistakes</CardTitle>
                <CardDescription>Cards you&apos;ve had trouble with recently</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-6 text-muted-foreground">You have 5 cards with recent mistakes</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Review Mistakes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="favorites" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Favorites</CardTitle>
                <CardDescription>Your favorite flashcards</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-6 text-muted-foreground">You have 8 favorite cards</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Review Favorites</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="recent" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recently Added</CardTitle>
                <CardDescription>Cards you&apos;ve added in the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-6 text-muted-foreground">You&apos;ve added 15 cards in the last week</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Review Recent</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Daily News</CardTitle>
            <CardDescription>Read articles in your target language</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="h-40 rounded-md bg-muted"></div>
                    <h3 className="font-semibold">Latest Economic Trends in Europe</h3>
                    <p className="text-sm text-muted-foreground">Read this article to practice business vocabulary</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">5 min read</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Progress value={30} className="h-2 w-16" />
                        <span className="text-xs text-muted-foreground">30%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="h-40 rounded-md bg-muted"></div>
                    <h3 className="font-semibold">Cultural Festivals This Summer</h3>
                    <p className="text-sm text-muted-foreground">Learn about cultural events and traditions</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">8 min read</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Progress value={0} className="h-2 w-16" />
                        <span className="text-xs text-muted-foreground">Locked</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/news">View All Articles</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
