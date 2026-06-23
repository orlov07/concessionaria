import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  stars?: number
}

export function TestimonialCard({ quote, name, stars = 5 }: TestimonialCardProps) {
  return (
    <div style={{
      background: '#141414',
      border: '1px solid #1f1f1f',
      borderTop: '3px solid #C9A227',
      borderRadius: '4px',
      padding: '24px',
    }}>
      <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
        {Array.from({ length: stars }).map((_, index) => (
          <Star key={index} size={14} style={{ fill: '#C9A227', color: '#C9A227' }} />
        ))}
      </div>
      <p style={{ fontSize: '14px', fontStyle: 'italic', lineHeight: 1.7, color: '#AAAAAA', marginBottom: '16px' }}>
        &ldquo;{quote}&rdquo;
      </p>
      <p style={{ fontSize: '13px', fontWeight: 700, color: '#C9A227' }}>— {name}</p>
    </div>
  )
}
