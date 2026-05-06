import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Subjects', href: '#subjects' },
  { label: 'Pricing',  href: '#pricing'  },
  { label: 'About',    href: '#about'    },
  { label: 'Guitar',   href: '#guitar'   },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Add shadow once user scrolls past the hero fold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile drawer on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Brand */}
        <a href="#hero" className={styles.logo} onClick={close}>
          <span aria-hidden="true">📚</span>
          <span className={styles.logoText}>Andrew's Tutoring</span>
        </a>

        {/* Desktop nav */}
        <nav
          className={`${styles.nav} ${menuOpen ? styles.open : ''}`}
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className={styles.link} onClick={close}>
              {label}
            </a>
          ))}
          <a href="#booking" className="btn btn-primary" onClick={close}>
            Book a Session
          </a>
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`}    />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`}    />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`}    />
        </button>
      </div>
    </header>
  )
}
