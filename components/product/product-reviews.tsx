import { Star, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProductReviewsProps {
  rating: number
  reviewCount: number
  productId: string
}

const reviews = [
  {
    id: "1",
    author: "Priya Sharma",
    rating: 5,
    date: "2 weeks ago",
    title: "Absolutely Stunning!",
    content:
      "The quality is outstanding and the color is even more beautiful in person. The zari work is exquisite. Worth every penny!",
    verified: true,
    helpful: 24,
  },
  {
    id: "2",
    author: "Meera Patel",
    rating: 5,
    date: "1 month ago",
    title: "Perfect for my daughter's wedding",
    content:
      "I received so many compliments wearing this saree. The fabric is premium quality and drapes beautifully. Highly recommend!",
    verified: true,
    helpful: 18,
  },
  {
    id: "3",
    author: "Anjali Reddy",
    rating: 4,
    date: "1 month ago",
    title: "Beautiful saree, minor issue with delivery",
    content:
      "The saree itself is gorgeous, but delivery took a bit longer than expected. Otherwise, very happy with the purchase.",
    verified: true,
    helpful: 12,
  },
]

export function ProductReviews({ rating, reviewCount }: ProductReviewsProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-serif font-bold mb-6">Customer Reviews</h2>

      {/* Rating Summary */}
      <div className="grid md:grid-cols-3 gap-8 mb-8 p-6 bg-muted/30 rounded-lg">
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">{rating}</div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < Math.floor(rating) ? "fill-secondary text-secondary" : "text-muted"}`}
              />
            ))}
          </div>
          <div className="text-sm text-muted-foreground">{reviewCount} reviews</div>
        </div>

        <div className="md:col-span-2 space-y-3">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center gap-3">
              <span className="text-sm w-12">{stars} star</span>
              <Progress value={stars === 5 ? 75 : stars === 4 ? 20 : 5} className="flex-1" />
              <span className="text-sm text-muted-foreground w-12 text-right">
                {stars === 5 ? "75%" : stars === 4 ? "20%" : "5%"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-0">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>
                  {review.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">{review.author}</span>
                  {review.verified && (
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded">
                      Verified Purchase
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-secondary text-secondary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>

                <h4 className="font-semibold mb-2">{review.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">{review.content}</p>

                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Helpful ({review.helpful})
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-6 bg-transparent">
        Load More Reviews
      </Button>
    </div>
  )
}
