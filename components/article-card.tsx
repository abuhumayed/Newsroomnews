import Image from "next/image"
import { ThumbsUp, MessageCircle, ArrowRight, ImageIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ArticleCardProps {
  title: string
  description: string
  imageUrl?: string
  likeCount: number
  commentCount: number
  url?: string
}

export function ArticleCard({ title, description, imageUrl, likeCount, commentCount, url }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
        {imageUrl ? (
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <ImageIcon className="w-16 h-16 mx-auto mb-2 text-gray-400" />
              <p className="text-sm font-medium">News Article</p>
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
        <div className="w-full h-px bg-black mb-3"></div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <ThumbsUp className="w-4 h-4" />
              <span>{likeCount}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{commentCount}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-black underline cursor-pointer hover:text-red-600 transition-colors">
            <span>More...</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
