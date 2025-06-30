import { ArticleCard } from "./article-card"

// Using your original articles.json structure but with working image URLs
const articles = [
  {
    id: 1,
    title: "PGA Tour Accuses LIV Golf Saudi Benefactors of Claiming Immunity from Courts",
    description:
      "A newly public court filing alleges that Saudi Arabia's Public Investment Fund and a lead executive have refused to produce documents or sit for depositions by claiming U.S. courts don't have jurisdiction over them.",
    imageUrl: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=200&fit=crop",
    likeCount: 150,
    commentCount: 23,
    url: "https://www.wsj.com/articles/liv-golf-pga-tour-lawsuit-saudi-arabia-immunity-11667658780",
  },
  {
    id: 2,
    title: "'The Big One Is Coming' and U.S. Military Isn't Ready...Ukraine 'just the warmup'",
    description: "A U.S. flag officer talks candidly about the fading U.S. deterrent.",
    imageUrl: "https://images.unsplash.com/photo-1526554850534-7c78330d5f90?w=400&h=200&fit=crop",
    likeCount: 180,
    commentCount: 34,
    url: "https://www.wsj.com/articles/the-big-one-is-coming-china-russia-charles-richard-u-s-military-11667597291",
  },
  {
    id: 3,
    title: "21 Early Black Friday Deals: Electric Scooters, Binoculars, and Camera Bags",
    description:
      "Black Friday has taken over the month of November. You can stock up on gifts for your family now (or gadgets for yourself).",
    imageUrl: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=400&h=200&fit=crop",
    likeCount: 340,
    commentCount: 53,
    url: "https://www.wired.com/story/weekend-deals-november-5-2022/",
  },
  {
    id: 4,
    title: "What We Know About the Financiers Who Helped Create This Twitter Mess",
    description:
      "While Elon Musk's massive $44 billion buyout of Twitter might seem like a one-man show, it's really a kind of Suicide Squad of big tech moguls and financiers coming together in a strange rogue's gallery reunion.",
    imageUrl: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=200&fit=crop",
    likeCount: 130,
    commentCount: 32,
    url: "https://gizmodo.com/twitter-elon-musk-finance-1849744679",
  },
]

export function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          description={article.description}
          imageUrl={article.imageUrl}
          likeCount={article.likeCount}
          commentCount={article.commentCount}
          url={article.url}
        />
      ))}
    </div>
  )
}
