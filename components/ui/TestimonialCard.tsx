import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  stars?: number
}

export function TestimonialCard({ quote, name, stars = 5 }: TestimonialCardProps) {
  return (
    <div className="rounded border border-[#1f1f1f] border-t-[3px] border-t-[#C9A227] bg-[#141414] p-6">
      <div className="mb-3 flex gap-1">
        {Array.from({ length: stars }).map((_, index) => (
          <Star key={index} size={14} className="fill-[#C9A227] text-[#C9A227]" />
        ))}
      </div>
      <p className="mb-4 text-sm italic leading-7 text-[#AAAAAA]">"{quote}"</p>
      <p className="text-sm font-bold text-[#C9A227]">— {name}</p>
    </div>
  )
}
