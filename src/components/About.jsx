import { useReveal } from "../hooks/useReveal";
import s from "./About.module.css";

const values = [
  {
    n: "01",
    title: "Professional Care",
    desc: "Every garment is handled with attention and cleaned using industry-standard processes.",
  },
  {
    n: "02",
    title: "Fast & Reliable",
    desc: "We provide quick turnaround times with free pickup and delivery services.",
  },
  {
    n: "03",
    title: "Customer Satisfaction",
    desc: "Our goal is to deliver fresh, clean, and perfectly pressed clothes every time.",
  },
];

export default function About() {
  const { ref: rLeft, visible: vLeft } = useReveal();
  const { ref: rRight, visible: vRight } = useReveal();

  return (
    <section className={s.section} id="about">
      <div
        ref={rLeft}
        className={`${s.visual} ${vLeft ? s.visible : ""}`}
      >
        <div className={s.imgMain}>
          <img
            src="/images/laundry-team.jpg"
            alt="Laundry Team"
          />
        </div>

        <div className={s.imgInset}>
          <img
            src="/images/staff-working.jpg"
            alt="Laundry Staff"
          />
        </div>
        <div className={s.imgMain}>
  <img src="/images/laundry-team.jpg" alt="Laundry Team" />
</div>

<div className={s.imgInset}>
  <img src="/images/staff-working.jpg" alt="Laundry Staff" />
</div>
      </div>

      <div
        ref={rRight}
        className={`${s.content} ${vRight ? s.visible : ""}`}
      >
        <span className={s.eyebrow}>About Us</span>

        <h2 className={s.h2}>
          Fresh Clothes,
          <br />
          Exceptional Service
        </h2>

        <p className={s.sub}>
          We are a trusted laundry and dry-cleaning company dedicated to
          providing high-quality garment care. From everyday washing to premium
          dry cleaning, our experienced team ensures your clothes are cleaned,
          pressed, and delivered with care.
        </p>

        <div className={s.values}>
          {values.map((v) => (
            <div key={v.n} className={s.value}>
              <span className={s.vNum}>{v.n}</span>

              <div>
                <strong>{v.title}</strong>
                <span>{v.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" className={s.btn}>
          Contact Us
        </a>
      </div>
    </section>
  );
}