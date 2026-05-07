import { useState } from 'react'
import { validateContactForm } from '../utils/validation.js'
import styles from './Contact.module.css'

const SUBJECTS = [
  'K–8 General',
  'Math (through Calculus 1)',
  'High School English',
  'High School Science',
  'High School Social Studies',
  'Computer Science (incl. AP)',
  'SAT Prep',
  'Guitar Lessons',
  'Other / Not Sure',
]

const INIT = { name: '', email: '', phone: '', subject: '', message: '' }

// Formspree endpoint — set VITE_FORMSPREE_URL in .env and in Vercel
// Get your free endpoint at formspree.io (50 submissions/month free)
const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL

export default function Contact() {
  const [form,   setForm]   = useState(INIT)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validateContactForm(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      const firstErrField = Object.keys(errs)[0]
      document.getElementById(`cf-${firstErrField}`)?.focus()
      return
    }

    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:    form.name.trim(),
          email:   form.email.trim(),
          phone:   form.phone.trim() || 'Not provided',
          subject: `Tutoring Inquiry: ${form.subject}`,
          message: form.message.trim(),
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm(INIT)
      } else {
        throw new Error(data?.error || 'Submission failed')
      }
    } catch (err) {
      console.error('Formspree error:', err)
      setStatus('error')
    }
  }

  const formConfigured = Boolean(FORMSPREE_URL)

  return (
    <section id="contact" className={styles.section}>
      <div className="section-inner">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Questions? Want to discuss your student's needs before booking?
          I usually respond within a few hours.
        </p>

        <div className={styles.grid}>
          {/* ── Contact info sidebar ── */}
          <aside className={styles.info}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Info</h3>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📧</span>
                <div>
                  <span className={styles.infoLabel}>Email</span>
                  {/* Replace with your real email */}
                  <a href="mailto:andrew.k.tutors@gmail.com" className={styles.infoValue}>
                    andrew.k.tutors@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Ellicott City, MD · In-person &amp; Virtual</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🏠</span>
                <div>
                  <span className={styles.infoLabel}>Where We Meet</span>
                  <span className={styles.infoValue}>
                    Your home, a local public library, or online — whatever works best for you.
                    House calls available within the Howard County area.
                  </span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>⏰</span>
                <div>
                  <span className={styles.infoLabel}>Response Time</span>
                  <span className={styles.infoValue}>Usually within a few hours</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📅</span>
                <div>
                  <span className={styles.infoLabel}>Availability</span>
                  <span className={styles.infoValue}>Weekdays & weekends by appointment</span>
                </div>
              </div>
            </div>

            <div className={styles.quickFacts}>
              <h4>Quick Facts</h4>
              <ul>
                <li>✓ Free 15-min intro call</li>
                <li>✓ No long-term commitment</li>
                <li>✓ In-person or virtual</li>
                <li>✓ Sessions start at $25</li>
              </ul>
            </div>
          </aside>

          {/* ── Contact form ── */}
          <div className={styles.formWrap}>
            {/* Dev warning — uncomment if you need to debug EmailJS setup
            {!formConfigured && (
              <div className={styles.configWarning} role="alert">
                ⚠️ <strong>Dev mode:</strong> Add EmailJS keys to your{' '}
                <code>.env</code> file to enable form submission.
              </div>
            )}
            */}

            {status === 'success' ? (
              <div className={styles.successMsg} role="status">
                <span className={styles.successIcon}>🎉</span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  className="btn btn-outline"
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                {/* Name + Email row */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="cf-name" className={styles.label}>
                      Name <span aria-hidden="true" className={styles.required}>*</span>
                    </label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      placeholder="Jane Smith"
                      aria-required="true"
                      aria-describedby={errors.name ? 'err-name' : undefined}
                    />
                    {errors.name && (
                      <span id="err-name" className={styles.errorMsg} role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="cf-email" className={styles.label}>
                      Email <span aria-hidden="true" className={styles.required}>*</span>
                    </label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      placeholder="jane@example.com"
                      aria-required="true"
                      aria-describedby={errors.email ? 'err-email' : undefined}
                    />
                    {errors.email && (
                      <span id="err-email" className={styles.errorMsg} role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone + Subject row */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="cf-phone" className={styles.label}>
                      Phone <span className={styles.optional}>(optional)</span>
                    </label>
                    <input
                      id="cf-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                      placeholder="(555) 000-0000"
                      aria-describedby={errors.phone ? 'err-phone' : undefined}
                    />
                    {errors.phone && (
                      <span id="err-phone" className={styles.errorMsg} role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="cf-subject" className={styles.label}>
                      Subject Area <span aria-hidden="true" className={styles.required}>*</span>
                    </label>
                    <select
                      id="cf-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`${styles.input} ${styles.select} ${errors.subject ? styles.inputError : ''}`}
                      aria-required="true"
                      aria-describedby={errors.subject ? 'err-subject' : undefined}
                    >
                      <option value="">Select a subject…</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.subject && (
                      <span id="err-subject" className={styles.errorMsg} role="alert">
                        {errors.subject}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label htmlFor="cf-message" className={styles.label}>
                    Message <span aria-hidden="true" className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    placeholder="Tell me a bit about the student and what support they need…"
                    aria-required="true"
                    aria-describedby={errors.message ? 'err-message' : undefined}
                  />
                  {errors.message && (
                    <span id="err-message" className={styles.errorMsg} role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {status === 'error' && (
                  <div className={styles.submitError} role="alert">
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={status === 'sending' || !formConfigured}
                >
                  {status === 'sending' ? (
                    <>
                      <span className={styles.btnSpinner} aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
