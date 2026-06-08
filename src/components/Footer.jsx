import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <div className={s.brand}>
          <span className={s.logo}>Laundry Services</span>

          <p className={s.tagline}>
            Professional laundry, dry cleaning, ironing, and pickup &
            delivery services. Fresh clothes, exceptional care, every time.
          </p>
        </div>

        {/* Services */}
        <div className={s.col}>
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Wash & Fold</a></li>
            <li><a href="#services">Dry Cleaning</a></li>
            <li><a href="#services">Ironing & Pressing</a></li>
            <li><a href="#services">Pickup & Delivery</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className={s.col}>
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className={s.col}>
          <h4>Support</h4>
          <ul>
            <li><a href="#contact">Book Service</a></li>
            <li><a href="#contact">Pickup Request</a></li>
            <li><a href="#contact">FAQ</a></li>
            <li><a href="#contact">Customer Support</a></li>
          </ul>
        </div>
      </div>

      <div className={s.bottom}>
        <span>
          © {new Date().getFullYear()} Pradeep Laundry Services.
          All Rights Reserved.
        </span>

        <span>
          Privacy Policy · Terms & Conditions · Service Policy
        </span>
      </div>
    </footer>
  );
}