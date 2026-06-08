import { useReveal } from "../hooks/useReveal";
import s from "./Testimonials.module.css";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    quote:
      "The pickup and delivery service is incredibly convenient. My clothes always come back fresh, clean, and perfectly folded.",
  },
  {
    name: "Rohan Mehta",
    role: "Verified Customer",
    quote:
      "Their dry cleaning service is excellent. My suits look brand new every time, and the turnaround is always fast.",
  },
  {
    name: "Ananya Krishnan",
    role: "Working Professional",
    quote:
      "I save so much time using their laundry service. The staff is professional, and the quality is consistently outstanding.",
  },
  {
    name: "Vikram Nair",
    role: "Business Owner",
    quote:
      "Reliable service with affordable pricing. Their stain removal treatment rescued several of my favorite shirts.",
  },
  {
    name: "Sneha Iyer",
    role: "Premium Member",
    quote:
      "I've been using their services for over two years. The pickup team is punctual, and the clothes always arrive neatly pressed.",
  },
  {
    name: "Karthik Reddy",
    role: "Hotel Manager",
    quote:
      "We use their commercial laundry service for our business. Excellent quality, timely delivery, and professional support.",
  },
];

function Card({ name, role, quote, delay }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`${s.card} ${visible ? s.visible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={s.stars}>★★★★★</div>

      <p className={s.quote}>
        "{quote}"
      </p>

      <div className={s.author}>
        <div className={s.avatar}>{name.charAt(0)}</div>

        <div>
          <p className={s.name}>{name}</p>
          <p className={s.role}>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section className={s.section} id="testimonials">
      <div
        ref={ref}
        className={`${s.header} ${visible ? s.hVisible : ""}`}
      >
        <span className={s.eyebrow}>Customer Reviews</span>

        <h2 className={s.h2}>
          Trusted by Hundreds
          <br />
          of Happy Customers
        </h2>

        <p className={s.sub}>
          Discover why customers trust us for professional laundry,
          dry cleaning, ironing, stain removal, and pickup & delivery services.
        </p>
      </div>

      <div className={s.grid}>
        {reviews.map((review, index) => (
          <Card
            key={index}
            name={review.name}
            role={review.role}
            quote={review.quote}
            delay={index * 80}
          />
        ))}
      </div>
    </section>
  );
}