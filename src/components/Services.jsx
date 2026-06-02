import { useReveal } from '../hooks/useReveal'
import s from './Services.module.css'

const services = [
  { icon: '🛍️', title: 'Curated Collections', desc: 'Every product is hand-selected by our team of lifestyle experts. No clutter — just the best of what\'s out there.' },
  { icon: '🚚', title: 'Express Delivery', desc: 'Same-day dispatch on orders placed before 2 PM. Track your parcel in real time through our app.' },
  { icon: '🔄', title: 'Easy Returns', desc: 'Not happy? Return within 30 days, no questions asked. We\'ll pick it up from your door at no extra cost.' },
  { icon: '🎁', title: 'Gift Services', desc: 'Premium gift wrapping, personalised notes, and direct delivery to loved ones — all handled beautifully.' },
  { icon: '💎', title: 'Loyalty Programme', desc: 'Earn Peoples Mart Points on every purchase. Redeem for discounts, early access, and exclusive member perks.' },
  { icon: '🤝', title: 'Personal Stylist', desc: 'Get matched with a personal shopping advisor who understands your taste and budget.' },
]

function ServiceCard({ icon, title, desc, delay }) {
  const { ref, visible } = useReveal()
  return (
    <article
      ref={ref}
      className={`${s.card} ${visible ? s.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={s.icon}>{icon}</div>
      <h3 className={s.cardTitle}>{title}</h3>
      <p className={s.cardDesc}>{desc}</p>
      <span className={s.link}>Learn more →</span>
    </article>
  )
}

export default function Services() {
  const { ref, visible } = useReveal()
  return (
    <section className={s.section} id="services">
      <div ref={ref} className={`${s.header} ${visible ? s.hVisible : ''}`}>
        <span className={s.eyebrow}>What We Offer</span>
        <h2 className={s.h2}>A seamless shopping<br />experience, end to end</h2>
        <p className={s.sub}>From discovery to your doorstep, every touchpoint is crafted for ease and delight.</p>
      </div>
      <div className={s.grid}>
        {services.map((svc, i) => (
          <ServiceCard key={svc.title} {...svc} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
