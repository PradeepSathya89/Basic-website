import s from './Hero.module.css'

export default function Hero() {
  return (
    <section className={s.hero} id="home">
      <div className={s.left}>
        <span className={s.eyebrow}>New Collection 2026</span>
        <h1 className={s.h1}>
          Curated for<br />the <em>discerning</em><br />lifestyle
        </h1>
        <p className={s.p}>
          Luxora brings you handpicked premium goods — from home essentials to personal luxuries — crafted with intention and delivered with care.
        </p>
        <div className={s.actions}>
          <a href="#services" className={s.btnPrimary}>Explore Collection</a>
          <a href="#about" className={s.btnGhost}>Our Story</a>
        </div>
        <div className={s.stats}>
          <div><span className={s.num}>12K+</span><span className={s.lbl}>Happy Customers</span></div>
          <div><span className={s.num}>500+</span><span className={s.lbl}>Products</span></div>
          <div><span className={s.num}>98%</span><span className={s.lbl}>Satisfaction</span></div>
        </div>
      </div>

      <div className={s.right}>
        <div className={s.grid}>
          <div className={`${s.block} ${s.block1}`}><span>Featured Collection</span></div>
          <div className={`${s.block} ${s.block2}`}><span>New Arrivals</span></div>
          <div className={`${s.block} ${s.block3}`}><span>Bestsellers</span></div>
        </div>
        <div className={s.badge}>Free<br />Shipping<br />Over ₹999</div>
      </div>
    </section>
  )
}
