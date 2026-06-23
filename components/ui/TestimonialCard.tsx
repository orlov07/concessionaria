import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  stars?: number
}

export function TestimonialCard({ quote, name, stars = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-[#141414] border border-[#1f1f1f] p-6 flex flex-col gap-4 hover:border-[#C9A227]/30 transition-colors">
      <div className="flex gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={14} className="text-[#C9A227] fill-[#C9A227]" />
        ))}
      </div>
      <p className="text-[#AAAAAA] text-sm leading-relaxed">"{quote}"</p>
      <p className="text-[#C9A227] text-sm font-semibold">— {name}</p>
    </div>
  )
}
