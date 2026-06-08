import s from "./Marquee.module.css";

const items = [
  "Free Pickup & Delivery",
  "Same-Day Service",
  "Professional Dry Cleaning",
  "Expert Stain Removal",
  "Wash & Fold Service",
  "Premium Ironing & Pressing",
  "Eco-Friendly Cleaning",
  "Commercial Laundry Solutions",
  "Affordable Pricing",
  "100% Customer Satisfaction",
];

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
  );
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
  );
}