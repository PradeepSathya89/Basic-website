import s from "./Team.module.css";

const images = [
  "/images/team-1.jpg",
  "/images/team-2.jpg",
  "/images/team-3.jpg",
  "/images/team-4.jpg",
  "/images/team-5.jpg",
  "/images/team-6.jpg",
  "/images/team-7.jpg",
  "/images/team-8.jpg",
];

export default function Team() {
  return (
    <section className={s.section} id="team">
      <h2 className={s.title}>Our Laundry Team</h2>

      <div className={s.slider}>
        <div className={s.track}>
          {[...images, ...images].map((img, index) => (
            <div className={s.card} key={index}>
              <img src={img} alt={`Laundry Team ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}