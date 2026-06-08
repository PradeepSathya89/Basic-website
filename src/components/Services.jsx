import { useReveal } from "../hooks/useReveal";
import {
  Shirt,
  Sparkles,
  Truck,
  ShieldCheck,
  Package,
  Building2,
} from "lucide-react";

import s from "./Services.module.css";

const services = [
  {
    icon: <Shirt size={42} />,
    title: "Wash & Fold",
    desc: "Professional washing, drying, and folding services for your everyday clothes.",
  },
  {
    icon: <Sparkles size={42} />,
    title: "Dry Cleaning",
    desc: "Expert dry cleaning for suits, dresses, jackets, and delicate fabrics to keep them looking fresh and spotless.",
  },
  {
    icon: <Truck size={42} />,
    title: "Free Pickup & Delivery",
    desc: "Convenient door-to-door laundry pickup and delivery, saving you time and effort.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Stain Removal",
    desc: "Specialized treatment for stubborn stains while protecting the quality of your garments.",
  },
  {
    icon: <Package size={42} />,
    title: "Ironing & Pressing",
    desc: "Perfectly pressed and wrinkle-free clothes ready to wear for any occasion.",
  },
  {
    icon: <Building2 size={42} />,
    title: "Commercial Laundry",
    desc: "Reliable laundry solutions for hotels, restaurants, hospitals, hostels, and businesses.",
  },
];

function ServiceCard({ icon, title, desc, delay }) {
  const { ref, visible } = useReveal();

  return (
    <article
      ref={ref}
      className={`${s.card} ${visible ? s.visible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={s.icon}>{icon}</div>

      <h3 className={s.cardTitle}>{title}</h3>

      <p className={s.cardDesc}>{desc}</p>

      <span className={s.link}>Learn More →</span>
    </article>
  );
}

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section className={s.section} id="services">
      <div
        ref={ref}
        className={`${s.header} ${visible ? s.hVisible : ""}`}
      >
        <span className={s.eyebrow}>OUR SERVICES</span>

        <h2 className={s.h2}>
          Professional Laundry
          <br />
          Services for Every Need
        </h2>

        <p className={s.sub}>
          From everyday washing to premium dry cleaning, we provide reliable,
          affordable, and hassle-free laundry solutions right at your doorstep.
        </p>
      </div>

      <div className={s.grid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
}