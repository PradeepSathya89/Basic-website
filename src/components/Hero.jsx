import s from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={s.hero} id="home">
      <div className={s.left}>
        <span className={s.eyebrow}>Professional Laundry Service</span>

        <h1 className={s.h1}>
          Fresh Clothes,
          <br />
          Clean Living,
          <br />
          <em>Delivered</em>
        </h1>

        <p className={s.p}>
          Experience hassle-free laundry services with free pickup and delivery.
          From everyday washing to premium dry cleaning, we take care of your
          clothes so you can focus on what matters most.
        </p>

        <div className={s.actions}>
          <a href="#services" className={s.btnPrimary}>
            Book a Pickup
          </a>

          <a href="#about" className={s.btnGhost}>
            Learn More
          </a>
        </div>

        <div className={s.stats}>
          <div>
            <span className={s.num}>10K+</span>
            <span className={s.lbl}>Orders Completed</span>
          </div>

          <div>
            <span className={s.num}>5K+</span>
            <span className={s.lbl}>Happy Customers</span>
          </div>

          <div>
            <span className={s.num}>99%</span>
            <span className={s.lbl}>Customer Satisfaction</span>
          </div>
        </div>
      </div>

      <div className={s.right}>
        <div className={s.grid}>
          <div className={`${s.block} ${s.block1}`}>
            <img
              src="/images/wash-fold.jpg"
              alt="Wash and Fold Service"
            />
          </div>

          <div className={`${s.block} ${s.block2}`}>
            <img
              src="/images/dry-cleaning.jpg"
              alt="Dry Cleaning Service"
            />
          </div>

          <div className={`${s.block} ${s.block3}`}>
            <img
              src="/images/pickup-delivery.jpg"
              alt="Pickup and Delivery Service"
            />
          </div>
          <div className={s.grid}>
  <div className={`${s.block} ${s.block1}`}>
    <img src="/images/dry-cleaning.jpg" alt="Laundry Service" />
  </div>

  <div className={`${s.block} ${s.block2}`}>
    <img src="/images/wash-fold.jpg" alt="Wash and Fold" />
  </div>

  <div className={`${s.block} ${s.block3}`}>
    <img src="/images/pickup-delivery.jpg" alt="Pickup and Delivery" />
  </div>
</div>
        </div>

        <div className={s.badge}>
          Free
          <br />
          Pickup &
          <br />
          Delivery
        </div>
      </div>
    </section>
  );
}