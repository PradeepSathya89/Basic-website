import { useState, useEffect } from 'react'
import s from './Navbar.module.css'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <a href="#home" className={s.logo}>Peoples Mart</a>

      <ul className={`${s.links} ${open ? s.open : ''}`}>
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li><a href="#contact" className={s.cta} onClick={() => setOpen(false)}>Shop Now</a></li>
      </ul>

      <button className={s.burger} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span className={open ? s.b1open : ''} />
        <span className={open ? s.b2open : ''} />
        <span className={open ? s.b3open : ''} />
      </button>
    </nav>
  )
}
