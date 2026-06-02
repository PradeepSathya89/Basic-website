import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <div className={s.brand}>
          <span className={s.logo}>Peoples Mart</span>
          <p className={s.tagline}>Curated lifestyle products delivered with care. Premium quality, every time.</p>
        </div>
        {[
          { title: 'Shop', links: ['New Arrivals','Bestsellers','Gift Sets','Sale'] },
          { title: 'Company', links: ['About Us','Careers','Press','Sustainability'] },
          { title: 'Support', links: ['Contact','Track Order','Returns','FAQ'] },
        ].map(col => (
          <div key={col.title} className={s.col}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className={s.bottom}>
        <span>© {new Date().getFullYear()} Peoples Mart Pvt. Ltd. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service · Cookie Settings</span>
      </div>
    </footer>
  )
}
