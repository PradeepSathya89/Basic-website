import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import s from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const { ref: rInfo, visible: vInfo } = useReveal()
  const { ref: rForm, visible: vForm } = useReveal()

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <section className={s.section} id="contact">
      <div ref={rInfo} className={`${s.info} ${vInfo ? s.visible : ''}`}>
        <span className={s.eyebrow}>Get in Touch</span>
        <h2 className={s.h2}>We'd love to<br />hear from you</h2>
        <p className={s.sub}>Have a question about an order, a partnership enquiry, or just want to say hello? Our team responds within 2 hours.</p>
        <div className={s.list}>
          {[
            { icon: '📍', label: 'Address', val: '42 Banjara Hills, Hyderabad, TS 500034' },
            { icon: '📞', label: 'Phone',   val: '+91 98765 43210' },
            { icon: '✉️', label: 'Email',   val: 'hello@luxora.in' },
            { icon: '🕐', label: 'Hours',   val: 'Mon – Sat: 9 AM – 7 PM IST' },
          ].map(item => (
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

      <div ref={rForm} className={`${s.formWrap} ${vForm ? s.visible : ''}`}>
        {sent ? (
          <div className={s.success}>
            <span className={s.successIcon}>✓</span>
            <h3>Message received!</h3>
            <p>We'll get back to you within 2 hours.</p>
            <button className={s.btnSecondary} onClick={() => setSent(false)}>Send another</button>
          </div>
        ) : (
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.row}>
              <div className={s.field}>
                <label className={s.label}>First Name</label>
                <input className={s.input} name="firstName" placeholder="Priya" value={form.firstName} onChange={handleChange} required />
              </div>
              <div className={s.field}>
                <label className={s.label}>Last Name</label>
                <input className={s.input} name="lastName" placeholder="Sharma" value={form.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className={s.field}>
              <label className={s.label}>Email</label>
              <input className={s.input} type="email" name="email" placeholder="priya@example.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className={s.field}>
              <label className={s.label}>Subject</label>
              <input className={s.input} name="subject" placeholder="Order enquiry, partnership, etc." value={form.subject} onChange={handleChange} />
            </div>
            <div className={s.field}>
              <label className={s.label}>Message</label>
              <textarea className={s.textarea} name="message" rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className={s.btnSubmit}>Send Message →</button>
          </form>
        )}
      </div>
    </section>
  )
}
