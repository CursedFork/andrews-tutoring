import { useState } from 'react'
import styles from './Subjects.module.css'

const SUBJECTS = [
  {
    emoji: '📚',
    title: 'K–8 All Subjects',
    desc: 'Comprehensive support across every subject for elementary and middle school students.',
    tags: ['Grades K–8'],
    color: '#6366f1',
    details: [
      {
        heading: 'Math',
        items: [
          'Arithmetic & number sense',
          'Fractions, decimals & percentages',
          'Basic geometry & measurement',
          'Introduction to algebra & variables',
          'Word problems & applied math',
        ],
      },
      {
        heading: 'Reading & Writing',
        items: [
          'Phonics & reading fluency',
          'Reading comprehension strategies',
          'Paragraph & essay structure',
          'Grammar, spelling & punctuation',
          'Vocabulary building',
        ],
      },
      {
        heading: 'Science & Social Studies',
        items: [
          'Life, earth & physical science basics',
          'U.S. geography & state history',
          'Community, civics & culture',
          'Scientific method & observation',
        ],
      },
    ],
  },
  {
    emoji: '➗',
    title: 'Math (through Calculus 1)',
    desc: 'Pre-algebra through Calculus 1. Foundation-first approach that builds real understanding.',
    tags: ['Grades 6–12'],
    color: '#8b5cf6',
    details: [
      {
        heading: 'Course Coverage',
        items: [
          'Pre-algebra & algebra I',
          'Algebra II & linear systems',
          'Geometry & proofs',
          'Trigonometry & unit circle',
          'Pre-calculus & functions',
          'Calculus 1 — limits, derivatives & integrals',
        ],
      },
      {
        heading: 'Focus Areas',
        items: [
          'Homework & classwork support',
          'Test and quiz preparation',
          'Filling foundational gaps',
          'Word problem strategy',
          'Graphing & visual understanding',
        ],
      },
    ],
  },
  {
    emoji: '📝',
    title: 'High School English',
    desc: 'Essay writing, literary analysis, grammar, and reading comprehension. Papers that actually get better — not just corrected.',
    tags: ['Grades 9–12'],
    color: '#14b8a6',
    details: [
      {
        heading: 'Writing',
        items: [
          'Five-paragraph & multi-page essays',
          'Argumentative & persuasive writing',
          'Analytical & literary essays',
          'Thesis development & structure',
          'Transitions, tone & style',
          'MLA citation & research basics',
        ],
      },
      {
        heading: 'Reading & Language',
        items: [
          'Literary analysis (fiction & non-fiction)',
          'Poetry & figurative language',
          'Reading comprehension strategies',
          'Grammar, mechanics & sentence structure',
          'Vocabulary in context',
        ],
      },
    ],
  },
  {
    emoji: '🔬',
    title: 'High School Science',
    desc: 'Core science classes explained clearly — focused on the concepts that actually show up on tests.',
    tags: ['Grades 9–12', 'Non-AP'],
    color: '#06b6d4',
    details: [
      {
        heading: 'Biology',
        items: [
          'Cell structure & function',
          'Genetics & heredity',
          'Evolution & natural selection',
          'Ecology & ecosystems',
          'Human body systems',
        ],
      },
      {
        heading: 'Chemistry',
        items: [
          'Atomic structure & the periodic table',
          'Chemical bonding & reactions',
          'Stoichiometry & balancing equations',
          'States of matter & gas laws',
          'Acids, bases & solutions',
        ],
      },
      {
        heading: 'Earth & Environmental Science',
        items: [
          'Geology & plate tectonics',
          'Weather, climate & atmosphere',
          'Astronomy & the solar system',
          'Environmental systems & sustainability',
        ],
      },
    ],
  },
  {
    emoji: '🌍',
    title: 'Social Studies',
    desc: 'Context-driven teaching that makes history and geography stick — not just memorization.',
    tags: ['Grades 9–12', 'Non-AP'],
    color: '#f59e0b',
    details: [
      {
        heading: 'History',
        items: [
          'World History — ancient civilizations through modern era',
          'U.S. History — colonial period through present day',
          'Key events, causes & effects',
          'Primary source analysis',
          'Essay & document-based questions (DBQs)',
        ],
      },
      {
        heading: 'Other Courses',
        items: [
          'Government & civics',
          'U.S. & world geography',
          'Economics fundamentals',
          'Current events & media literacy',
        ],
      },
    ],
  },
  {
    emoji: '💻',
    title: 'Computer Science',
    desc: 'Intro CS through AP Computer Science A & Principles. Coding concepts, problem solving, and algorithmic thinking.',
    tags: ['All levels', 'AP included'],
    color: '#0ea5e9',
    highlight: true,
    details: [
      {
        heading: 'Languages & Tools',
        items: [
          'Python — general-purpose, great for beginners',
          'Java — AP Computer Science A',
          'JavaScript — web basics & interactivity',
          'HTML & CSS — building web pages',
          'Scratch — visual coding for younger students',
          'Block-based coding (Code.org, MIT App Inventor)',
        ],
      },
      {
        heading: 'Topics',
        items: [
          'Variables, loops, conditionals & functions',
          'Object-oriented programming (OOP)',
          'Data structures — arrays, lists, maps',
          'Algorithms & problem solving',
          'Debugging strategies',
          'AP CS A & AP CS Principles prep',
        ],
      },
    ],
  },
  {
    emoji: '✏️',
    title: 'SAT Prep',
    desc: 'Targeted prep for reading, writing, and math. Strategy, timing, and practice — the three things that actually move your score.',
    tags: ['All levels', '$50 / session'],
    color: '#ef4444',
    highlight: true,
    details: [
      {
        heading: 'Math',
        items: [
          'Algebra & linear equations',
          'Data analysis & statistics',
          'Advanced math & functions',
          'Problem-solving shortcuts & elimination',
          'Calculator vs. no-calculator strategy',
        ],
      },
      {
        heading: 'Reading & Writing',
        items: [
          'Evidence-based reading comprehension',
          'Vocabulary in context',
          'Grammar, punctuation & sentence structure',
          'Rhetoric & author\'s purpose',
          'Passage annotation strategies',
        ],
      },
      {
        heading: 'Test Strategy',
        items: [
          'Pacing & time management per section',
          'Process of elimination techniques',
          'When to guess vs. skip',
          'Full practice test review',
          'Score improvement targeting',
        ],
      },
    ],
  },
  {
    emoji: '🧠',
    title: 'Study Strategies',
    desc: 'The skills that make every other subject easier — how to study smarter, stay organized, and perform when it counts.',
    tags: ['All grades'],
    color: '#10b981',
    details: [
      {
        heading: 'Note-Taking Methods',
        items: [
          'Cornell notes system',
          'Mind mapping & concept webs',
          'Outlining & summarizing techniques',
          'Active listening in class',
          'Organizing notes for review',
        ],
      },
      {
        heading: 'Memory & Retention',
        items: [
          'Active recall vs. passive re-reading',
          'Spaced repetition practice',
          'Flashcard strategies (physical & digital)',
          'Connecting new material to prior knowledge',
          'Teaching back as a learning tool',
        ],
      },
      {
        heading: 'Planning & Test Prep',
        items: [
          'Building a study schedule',
          'Breaking large tasks into steps',
          'Prioritizing assignments & deadlines',
          'Managing test anxiety',
          'Pre-test review routines',
        ],
      },
    ],
  },
]

export default function Subjects() {
  // Tracks which card titles are currently expanded
  const [expanded, setExpanded] = useState(new Set())

  const toggle = (title) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(title) ? next.delete(title) : next.add(title)
      return next
    })
  }

  return (
    <section id="subjects" className={styles.section}>
      <div className="section-inner">
        <h2 className="section-title">Subjects & Services</h2>
        <p className="section-subtitle">
          Whether you need to catch up, keep up, or get ahead — there's a session
          designed for exactly where you are right now. Click any subject to see
          what's covered.
        </p>

        <div className={styles.grid}>
          {SUBJECTS.map((s) => {
            const isOpen = expanded.has(s.title)
            return (
              <article
                key={s.title}
                className={`${styles.card} ${s.highlight ? styles.cardHighlight : ''} ${isOpen ? styles.cardOpen : ''}`}
                style={{ '--card-accent': s.color }}
              >
                {s.highlight && (
                  <span className={styles.featuredBadge}>⭐ Featured</span>
                )}

                {/* Clickable header */}
                <button
                  className={styles.cardHeader}
                  onClick={() => toggle(s.title)}
                  aria-expanded={isOpen}
                  aria-controls={`details-${s.title.replace(/\s+/g, '-')}`}
                >
                  <span className={styles.emoji}>{s.emoji}</span>
                  <span className={styles.cardTitle}>{s.title}</span>
                  <span
                    className={styles.chevron}
                    aria-hidden="true"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    ▾
                  </span>
                </button>

                <p className={styles.cardDesc}>{s.desc}</p>

                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>

                {/* Expandable details */}
                <div
                  id={`details-${s.title.replace(/\s+/g, '-')}`}
                  className={`${styles.details} ${isOpen ? styles.detailsOpen : ''}`}
                >
                  <div className={styles.detailsInner}>
                    {s.details.map((section) => (
                      <div key={section.heading} className={styles.detailSection}>
                        <h4 className={styles.detailHeading}>{section.heading}</h4>
                        <ul className={styles.detailList}>
                          {section.items.map((item) => (
                            <li key={item} className={styles.detailItem}>
                              <span aria-hidden="true" className={styles.bullet}>▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <a href="#contact" className={styles.detailCta}>
                      Inquire about this subject →
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <p className={styles.note}>
          Don't see your subject? <a href="#contact">Reach out</a> — I may still be able to help.
        </p>
      </div>
    </section>
  )
}
