import styles from './Pricing.module.css'

const PLANS = [
  {
    name: 'Summer',
    emoji: '☀️',
    price: '$25',
    per: 'per session',
    desc: 'Great for keeping skills sharp over the summer break.',
    features: [
      '1-on-1 session',
      'All K–8 subjects',
      'Flexible scheduling',
      '~60-minute sessions',
    ],
    cta: 'Book a Summer Session',
    href: '#booking',
    accent: '#14b8a6',
  },
  {
    name: 'School Year',
    emoji: '🏫',
    price: '$40',
    per: 'per hour',
    desc: 'The full tutoring experience during the academic year.',
    features: [
      '1-on-1 session',
      'All listed subjects',
      'Homework & test prep',
      'Progress updates',
    ],
    cta: 'Book a Session',
    href: '#booking',
    accent: '#6366f1',
    featured: true,
  },
  {
    name: 'SAT Prep',
    emoji: '✏️',
    price: '$50',
    per: 'per session',
    desc: 'Targeted practice for reading, writing, and math sections.',
    features: [
      'Full SAT section coverage',
      'Strategy & timing drills',
      'Practice problem sets',
      'Score-improvement focus',
    ],
    cta: 'Book SAT Prep',
    href: '#booking',
    accent: '#f59e0b',
  },
]

const GROUP_RATES = [
  { students: 2, total: '$40', each: '$20 each' },
  { students: 3, total: '$50', each: '~$17 each' },
  { students: 4, total: '$60', each: '$15 each' },
]

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className="section-inner">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          No hidden fees. No long-term contracts. Just great tutoring at rates
          that work for families.
        </p>

        {/* Individual rate cards */}
        <div className={styles.cards}>
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
              style={{ '--plan-accent': plan.accent }}
            >
              {plan.featured && (
                <span className={styles.popularBadge}>Most Popular</span>
              )}
              <span className={styles.planEmoji}>{plan.emoji}</span>
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.per}>{plan.per}</span>
              </div>
              <p className={styles.planDesc}>{plan.desc}</p>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span aria-hidden="true" className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                style={plan.featured ? {} : { color: plan.accent, borderColor: plan.accent }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Group rates */}
        <div className={styles.groupSection}>
          <h3 className={styles.groupTitle}>
            <span aria-hidden="true">👥</span> Group Session Rates
          </h3>
          <p className={styles.groupSub}>
            Have a study group? Everyone learns more and pays less.
          </p>
          <div className={styles.groupTable}>
            <div className={styles.groupHeader}>
              <span>Students</span>
              <span>Total Cost</span>
              <span>Per Student</span>
              <span></span>
            </div>
            {GROUP_RATES.map(({ students, total, each }) => (
              <div key={students} className={styles.groupRow}>
                <span><strong>{students} students</strong></span>
                <span className={styles.groupPrice}>{total}</span>
                <span className={styles.groupEach}>{each}</span>
                <a href="#contact" className={styles.groupCta}>Inquire →</a>
              </div>
            ))}
          </div>
          <p className={styles.groupNote}>
            * Guitar lessons are priced separately — <a href="#guitar">see below</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
