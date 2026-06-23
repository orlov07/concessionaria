import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  stars?: number
}

export function TestimonialCard({ quote, name, stars = 5 }: TestimonialCardProps) {
  return (
    <div className="rounded border border-[#1f1f1f] border-t-[3px] border-t-[#C9A227] bg-[#141414] p-6 md:p-8">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: stars }).map((_, index) => (
          <Star key={index} size={15} className="fill-[#C9A227] text-[#C9A227]" />
        ))}
      </div>
      <p className="mb-5 text-[15px] italic leading-8 text-[#B5B5B5]">"{quote}"</p>
      <p className="text-[15px] font-bold text-[#C9A227]">- {name}</p>
    </div>
  )
}
