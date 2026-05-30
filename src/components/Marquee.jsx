import s from './Marquee.module.css'

const items = [
  'Free Returns', 'Handpicked Quality', 'Secure Payments',
  'Same-Day Dispatch', 'Premium Packaging', 'Loyalty Rewards', 'Eco-Friendly',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className={s.wrap}>
      <div className={s.track}>
        {doubled.map((item, i) => (
          <span key={i} className={s.item}>
            <span className={s.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
