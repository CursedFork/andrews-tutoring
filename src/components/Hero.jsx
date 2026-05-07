import styles from './Hero.module.css'

// Subject cards that float on the right side of the hero
const FLOAT_CARDS = [
  { emoji: '➕', label: 'Algebra'       },
  { emoji: '📖', label: 'English'       },
  { emoji: '🔬', label: 'Science'       },
  { emoji: '🎸', label: 'Guitar'        },
  { emoji: '∫',  label: 'Calculus'      },
  { emoji: '✏️', label: 'SAT Prep'     },
]

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative gradient blobs — aria-hidden so screen readers skip */}
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={styles.grid}>
        {/* ── Left column ── */}
        <div className={styles.left}>
          <span className={styles.badge}>🎓 Personalized 1-on-1 Tutoring</span>

          <h1 className={styles.heading}>
            Build Confidence.<br />
            <span className={styles.gradient}>Master Any Subject.</span>
          </h1>

          <p className={styles.sub}>
            Expert tutoring for K–8 students, high schoolers, SAT prep, and
            even beginner guitar. Flexible scheduling and a teaching style that
            actually works — starting at just <strong>$25/session</strong>.
          </p>

          {/* Quick-stat bar */}
          <div className={styles.stats} aria-label="Quick stats">
            <div className={styles.stat}>
              <span className={styles.statVal}>K–12</span>
              <span className={styles.statLbl}>Grade Levels</span>
            </div>
            <div className={styles.divider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statVal}>$25</span>
              <span className={styles.statLbl}>Summer Sessions</span>
            </div>
            <div className={styles.divider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statVal}>6+</span>
              <span className={styles.statLbl}>Subject Areas</span>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="#booking" className="btn btn-primary">
              Book a Free Consultation
            </a>
            <a href="#subjects" className="btn btn-outline">
              View All Subjects
            </a>
          </div>
        </div>

        {/* ── Right column — floating subject cards ── */}
        <div className={styles.cards} aria-hidden="true">
          {FLOAT_CARDS.map(({ emoji, label }, i) => (
            <div
              key={label}
              className={styles.card}
              style={{ animationDelay: `${i * 0.35}s` }}
            >
              <span className={styles.cardEmoji}>{emoji}</span>
              <span className={styles.cardLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
