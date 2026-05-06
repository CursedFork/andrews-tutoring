import styles from './Guitar.module.css'

const PERKS = [
  { emoji: '🎵', title: 'All Ages Welcome', desc: 'Kids, teens, and adults — it\'s never too early or too late to start.' },
  { emoji: '🎸', title: 'Beginner Focused',  desc: 'Zero experience needed. We start with the basics and build at your pace.' },
  { emoji: '🎶', title: 'Learn Real Songs',   desc: 'Chords, strumming patterns, and songs you actually want to play.' },
  { emoji: '🏠', title: 'Flexible Format',    desc: 'In-person or virtual. Acoustic or electric. Your schedule, your gear.' },
]

export default function Guitar() {
  return (
    <section id="guitar" className={styles.section}>
      <div className="section-inner">
        <div className={styles.inner}>

          {/* ── Text side ── */}
          <div className={styles.text}>
            <span className={styles.eyebrow}>🎸 Special Offering</span>
            <h2 className={styles.title}>
              Beginner Guitar<br />
              <span className={styles.gradient}>Lessons for All Ages</span>
            </h2>
            <p className={styles.desc}>
              Always wanted to learn guitar? Now's the time. I teach beginner
              guitar lessons in a relaxed, encouraging environment — no musical
              experience required.
            </p>
            <p className={styles.desc}>
              We'll cover chords, strumming rhythm, reading tabs, and most
              importantly — playing songs you love. Learning should be fun.
            </p>

            <div className={styles.priceBanner}>
              <div className={styles.priceInfo}>
                <span className={styles.priceLabel}>Guitar Lessons</span>
                <span className={styles.price}>$40 <span className={styles.per}>/ hour</span></span>
              </div>
              <a href="#booking" className="btn btn-accent">
                Book a Guitar Lesson
              </a>
            </div>
          </div>

          {/* ── Perk cards ── */}
          <div className={styles.perks}>
            {PERKS.map(({ emoji, title, desc }) => (
              <div key={title} className={styles.perk}>
                <span className={styles.perkEmoji}>{emoji}</span>
                <div>
                  <h3 className={styles.perkTitle}>{title}</h3>
                  <p  className={styles.perkDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
