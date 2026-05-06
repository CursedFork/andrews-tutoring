import styles from './Subjects.module.css'

const SUBJECTS = [
  {
    emoji: '📚',
    title: 'K–8 All Subjects',
    desc: 'Comprehensive support across every subject — reading, writing, math, science, and social studies for elementary and middle school students.',
    tags: ['Grades K–8'],
    color: '#6366f1',
  },
  {
    emoji: '➗',
    title: 'Math (through Calculus 1)',
    desc: 'Pre-algebra, algebra I & II, geometry, pre-calculus, and Calculus 1. Strong foundation-first approach that builds real understanding.',
    tags: ['Grades 6–12'],
    color: '#8b5cf6',
  },
  {
    emoji: '📝',
    title: 'High School English',
    desc: 'Essay writing, literary analysis, grammar, vocabulary, and reading comprehension. Papers that actually get better — not just corrected.',
    tags: ['Grades 9–12'],
    color: '#14b8a6',
  },
  {
    emoji: '🔬',
    title: 'High School Science',
    desc: 'Biology, chemistry, and earth science. Focused on the core concepts that show up on tests — explained clearly, without the confusion.',
    tags: ['Grades 9–12', 'Non-AP'],
    color: '#06b6d4',
  },
  {
    emoji: '🌍',
    title: 'Social Studies',
    desc: 'World history, U.S. history, and geography. Context-driven teaching that makes events stick, not just memorization.',
    tags: ['Grades 9–12', 'Non-AP'],
    color: '#f59e0b',
  },
  {
    emoji: '💻',
    title: 'Computer Science',
    desc: 'Intro CS through AP Computer Science A & Principles. Coding concepts, problem solving, data structures, and algorithmic thinking.',
    tags: ['All levels', 'AP included'],
    color: '#0ea5e9',
    highlight: true,
  },
  {
    emoji: '✏️',
    title: 'SAT Prep',
    desc: 'Targeted prep for reading, writing, and math sections. Strategy, timing, and practice — the three things that actually move your score.',
    tags: ['All levels', '$50 / session'],
    color: '#ef4444',
    highlight: true,
  },
]

export default function Subjects() {
  return (
    <section id="subjects" className={styles.section}>
      <div className="section-inner">
        <h2 className="section-title">Subjects & Services</h2>
        <p className="section-subtitle">
          Whether you need to catch up, keep up, or get ahead — there's a session
          designed for exactly where you are right now.
        </p>

        <div className={styles.grid}>
          {SUBJECTS.map((s) => (
            <article
              key={s.title}
              className={`${styles.card} ${s.highlight ? styles.cardHighlight : ''}`}
              style={{ '--card-accent': s.color }}
            >
              {s.highlight && (
                <span className={styles.featuredBadge}>⭐ Featured</span>
              )}
              <span className={styles.emoji}>{s.emoji}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          Don't see your subject? <a href="#contact">Reach out</a> — I may still be able to help.
        </p>
      </div>
    </section>
  )
}
