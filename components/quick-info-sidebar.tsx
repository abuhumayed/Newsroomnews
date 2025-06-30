import { QuickInfoCard } from "./quick-info-card"

// Using your original quick.json data structure
const quickInfo = [
  {
    id: 1,
    title: "Twitter begins rolling out $7.99 Twitter Blue plan with verification, fewer ads",
    description:
      "Twitter has begun rolling out a pricier Twitter Blue plan, starting at $7.99 per month, that includes verification and ostensibly fewer ads.",
  },
  {
    id: 2,
    title: "Tweep's Twitter",
    description:
      "Welcome to Startups Weekly, a nuanced take on this week's startup news and trends by Senior Reporter and Equity co-host Natasha Mascarenhas.",
  },
  {
    id: 3,
    title: "Jack Dorsey breaks his silence, owns responsibility for why everyone is in this situation at Twitter",
    description:
      "Jack Dorsey breaks his silence to address Twitter's layoffs, which impacted approximately 50% of the social media company's staff.",
  },
  {
    id: 4,
    title: "Bitwise's Katherine Dowling talks rules and regs at TC Sessions: Crypto",
    description:
      "Crypto's on the road to stateside regulation, but how much is enough without stifling the sector's growth and future innovation?",
  },
]

export function QuickInfoSidebar() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Quick Updates</h2>
      <div className="space-y-4">
        {quickInfo.map((item) => (
          <QuickInfoCard key={item.id} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  )
}
