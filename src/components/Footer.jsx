import styles from './Footer.module.css'

const LINKS = [
  { label: 'Subjects', href: '#subjects' },
  { label: 'Pricing',  href: '#pricing'  },
  { label: 'About',    href: '#about'    },
  { label: 'Guitar',   href: '#guitar'   },
  { label: 'Booking',  href: '#booking'  },
  { label: 'Contact',  href: '#contact'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo}>
              <span aria-hidden="true">📚</span>
              <span>Andrew's Tutoring</span>
            </a>
            <p className={styles.tagline}>
              Building confident, capable students — one session at a time.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation" className={styles.nav}>
            <h3 className={styles.navTitle}>Quick Links</h3>
            <ul className={styles.navList}>
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className={styles.navLink}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mini contact */}
          <div className={styles.contact}>
            <h3 className={styles.navTitle}>Contact</h3>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:andrew.k.tutors@gmail.com" className={styles.navLink}>
                  📧 andrew.k.tutors@gmail.com
                </a>
              </li>
              <li className={styles.contactItem}>
                📍 Ellicott City, MD · In-person &amp; Virtual
              </li>
            </ul>
            <a href="#booking" className={`btn btn-primary ${styles.ctaBtn}`}>
              Book a Session
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} Andrew's Tutoring. All rights reserved.</p>
          <p className={styles.built}>
            Built with React &amp; Vite · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
