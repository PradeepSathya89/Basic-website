import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import s from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const { ref: rInfo, visible: vInfo } = useReveal();
  const { ref: rForm, visible: vForm } = useReveal();

  const handleChange = (e) =>
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className={s.section} id="contact">
      {/* Contact Information */}
      <div
        ref={rInfo}
        className={`${s.info} ${vInfo ? s.visible : ""}`}
      >
        <span className={s.eyebrow}>Contact Us</span>

        <h2 className={s.h2}>
          Schedule Your
          <br />
          Laundry Service
        </h2>

        <p className={s.sub}>
          Need laundry pickup, dry cleaning, ironing, or commercial laundry
          services? Contact us today and our team will assist you quickly.
        </p>

        <div className={s.list}>
          {[
            {
              icon: "📍",
              label: "Address",
              val: "Hyderabad, Telangana, India",
            },
            {
              icon: "📞",
              label: "Phone",
              val: "+91 88975 41279",
            },
            {
              icon: "✉️",
              label: "Email",
              val: "support@laundryservice.com",
            },
            {
              icon: "🚚",
              label: "Pickup Service",
              val: "Available Across Hyderabad",
            },
            {
              icon: "🕐",
              label: "Working Hours",
              val: "Mon - Sun : 8:00 AM - 9:00 PM",
            },
          ].map((item) => (
            <div key={item.label} className={s.item}>
              <div className={s.itemIcon}>{item.icon}</div>

              <div>
                <p className={s.itemLabel}>{item.label}</p>
                <p className={s.itemVal}>{item.val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div
        ref={rForm}
        className={`${s.formWrap} ${vForm ? s.visible : ""}`}
      >
        {sent ? (
          <div className={s.success}>
            <span className={s.successIcon}>✓</span>

            <h3>Booking Request Received!</h3>

            <p>
              Thank you for contacting us. Our team will reach out shortly to
              confirm your laundry service request.
            </p>

            <button
              className={s.btnSecondary}
              onClick={() => setSent(false)}
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.row}>
              <div className={s.field}>
                <label className={s.label}>First Name</label>

                <input
                  className={s.input}
                  name="firstName"
                  placeholder="Pradeep"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={s.field}>
                <label className={s.label}>Last Name</label>

                <input
                  className={s.input}
                  name="lastName"
                  placeholder="Sathya"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={s.field}>
              <label className={s.label}>Phone Number</label>

              <input
                className={s.input}
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className={s.field}>
              <label className={s.label}>Service Required</label>

              <select
                className={s.input}
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                <option value="Wash & Fold">Wash & Fold</option>
                <option value="Dry Cleaning">Dry Cleaning</option>
                <option value="Ironing & Pressing">
                  Ironing & Pressing
                </option>
                <option value="Stain Removal">
                  Stain Removal
                </option>
                <option value="Commercial Laundry">
                  Commercial Laundry
                </option>
                <option value="Pickup & Delivery">
                  Pickup & Delivery
                </option>
              </select>
            </div>

            <div className={s.field}>
              <label className={s.label}>Message</label>

              <textarea
                className={s.textarea}
                name="message"
                rows={5}
                placeholder="Tell us about your laundry requirements..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={s.btnSubmit}>
              Book Laundry Service →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}