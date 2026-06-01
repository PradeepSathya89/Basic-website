import s from './Marquee.module.css'

const items = [
  'Free Returns', 'Handpicked Quality', 'Secure Payments',
  'Same-Day Dispatch', 'Premium Packaging', 'Loyalty Rewards', 'Eco-Friendly',
]

function TrackGroup() {
  return (
    <div className={s.group} aria-hidden="true">
      {items.map((item, i) => (
        <span key={i} className={s.item}>
          <span className={s.dot} />
          {item}
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className={s.wrap}>
      <div className={s.track}>
        <TrackGroup />
        <TrackGroup />
        <TrackGroup />
        <TrackGroup />
      </div>
    </div>
  )
}