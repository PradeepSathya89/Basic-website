import { useReveal } from '../hooks/useReveal'
import s from './About.module.css'

const values = [
  { n: '01', title: 'Quality First', desc: 'Every item passes our 12-point quality check before it reaches our shelves.' },
  { n: '02', title: 'Sustainably Sourced', desc: 'Over 70% of our catalogue comes from eco-certified brands and artisans.' },
  { n: '03', title: 'People Over Profit', desc: 'We reinvest 5% of revenue into fair-trade communities every quarter.' },
]

export default function About() {
  const { ref: rLeft, visible: vLeft } = useReveal()
  const { ref: rRight, visible: vRight } = useReveal()

  return (
    <section className={s.section} id="about">
      <div ref={rLeft} className={`${s.visual} ${vLeft ? s.visible : ''}`}>
        <div className={s.imgMain}><span>Pradeep</span></div>
        <div className={s.imgInset}><span>Sathya Team</span></div>
      </div>

      <div ref={rRight} className={`${s.content} ${vRight ? s.visible : ''}`}>
        <span className={s.eyebrow}>Our Story</span>
        <h2 className={s.h2}>Built on craft,<br />driven by care</h2>
        <p className={s.sub}>
          Luxora started in 2019 with a simple belief: shopping should feel good from the first click to the last unboxing.
          We partner only with brands that share our commitment to quality and sustainability.
        </p>
        <div className={s.values}>
          {values.map(v => (
            <div key={v.n} className={s.value}>
              <span className={s.vNum}>{v.n}</span>
              <div>
                <strong>{v.title}</strong>
                <span>{v.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <a href="#contact" className={s.btn}>Work With Us</a>
      </div>
    </section>
  )
}
