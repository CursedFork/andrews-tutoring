import styles from './About.module.css'

const HIGHLIGHTS = [
  { emoji: '🎓', text: "B.S. Computer Science, UMBC '25" },
  { emoji: '💻', text: 'CS specialist, AP level included' },
  { emoji: '🏫', text: 'HCPSS Substitute Teacher' },
  { emoji: '🤝', text: 'Patient, student-centered approach' },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="section-inner">
        <div className={styles.grid}>

          {/* ── Left: Visual / avatar card ── */}
          <div className={styles.avatarCol}>
            <div className={styles.avatarWrap}>
              {/*
                Replace the placeholder div below with an <img> tag once you
                have a photo. Example:
                  <img src="/andrew.jpg" alt="Andrew, tutor" className={styles.avatar} />
              */}
              <div className={styles.avatarPlaceholder} aria-hidden="true">
                <span>👨‍🏫</span>
              </div>
            </div>
            <div className={styles.highlights}>
              {HIGHLIGHTS.map(({ emoji, text }) => (
                <div key={text} className={styles.highlight}>
                  <span>{emoji}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Bio ── */}
          <div className={styles.bio}>
            <span className={styles.eyebrow}>About Your Tutor</span>
            <h2 className={styles.name}>Hi, I'm Andrew 👋</h2>

            <p>
              I graduated from UMBC in May 2025 with a dual degree — a B.S. in
              Computer Science and a B.A. in Philosophy. I currently work as a
              substitute teacher with Howard County Public School System, which
              has given me direct classroom experience across a range of grade
              levels and subjects.
            </p>
            <p>
              My interest in education runs in the family. My mother has been a
              teacher in HCPSS for over 30 years, and her dedication to her
              students is a big part of what drew me to tutoring. I care about
              students actually understanding the material — not just getting
              through the homework.
            </p>
            <p>
              I'm particularly strong in computer science and teach it at all
              levels, including AP. I also cover all academic subjects through
              8th grade, math through Calculus 1, high school English, science,
              social studies, SAT prep, and beginner guitar.
            </p>

            <blockquote className={styles.quote}>
              "My goal isn't just better grades — it's students who walk away
              feeling like they actually get it."
            </blockquote>

            <div className={styles.actions}>
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#booking" className="btn btn-outline">
                See Availability
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
