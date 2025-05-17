import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DeckList } from "@/components/deck-list"
import { Search, Plus } from "lucide-react"
import Link from "next/link"

export default function FlashcardsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Flashcards</h1>
          <Button asChild>
            <Link href="/flashcards/new">
              <Plus className="mr-2 h-4 w-4" /> Create Flashcard
            </Link>
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search flashcards..." className="w-full bg-background pl-8" />
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Decks</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="mistakes">Mistakes</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <DeckList />
          </TabsContent>
          <TabsContent value="favorites" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Favorite Cards</CardTitle>
                <CardDescription>Your favorite flashcards across all decks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-6 text-muted-foreground">You have 8 favorite cards</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mistakes" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Mistake Cards</CardTitle>
                <CardDescription>Cards you&apos;ve had trouble with recently</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-6 text-muted-foreground">You have 5 cards with recent mistakes</p>
              </CardContent>
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
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
