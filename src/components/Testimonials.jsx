import { useReveal } from '../hooks/useReveal'
import s from './Testimonials.module.css'

const reviews = [
  { name: 'Priya Sharma',   role: 'Loyal customer since 2021', quote: 'The packaging alone made me feel special. Every order from Peoples Mart feels like a gift — even when I\'m buying for myself.' },
  { name: 'Rohan Mehta',    role: 'Verified buyer',            quote: 'Ordered a gift set for my wife\'s birthday at 11 AM and it arrived by 6 PM beautifully wrapped. Genuinely impressive.' },
  { name: 'Ananya Krishnan',role: 'Interior enthusiast',       quote: 'Their personal stylist helped me pick a complete home refresh within my budget. I would never have found these pieces on my own.' },
  { name: 'Vikram Nair',    role: 'Hyderabad',                 quote: 'The return process was shockingly easy. I pressed one button and they collected the parcel the next morning. No hassle.' },
  { name: 'Sneha Iyer',     role: 'Premium member',            quote: 'I\'ve ordered over 40 times. The quality is consistent, the curation improves each season, and customer care is always there.' },
  { name: 'Karthik Reddy',  role: 'Business owner',            quote: 'I gifted a Peoples Mart hamper to my team and every single person asked me where it was from. Premium feel, fair price.' },
]

function Card({ name, role, quote, delay }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={`${s.card} ${visible ? s.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={s.stars}>{'★★★★★'}</div>
      <p className={s.quote}>"{quote}"</p>
      <div className={s.author}>
        <div className={s.avatar}>{name[0]}</div>
        <div>
          <p className={s.name}>{name}</p>
          <p className={s.role}>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref, visible } = useReveal()
  return (
    <section className={s.section} id="testimonials">
      <div ref={ref} className={`${s.header} ${visible ? s.hVisible : ''}`}>
        <span className={s.eyebrow}>Customer Reviews</span>
        <h2 className={s.h2}>Loved by thousands</h2>
        <p className={s.sub}>Real words from real customers who shop with Luxora every day.</p>
      </div>
      <div className={s.grid}>
        {reviews.map((r, i) => <Card key={r.name} {...r} delay={i * 80} />)}
      </div>
    </section>
  )
}
