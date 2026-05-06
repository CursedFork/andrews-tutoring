import { useEffect, useRef } from 'react'
import styles from './Booking.module.css'

/*
  BOOKING SECTION
  ---------------
  Supports two embed strategies (pick one):

  Option A — Calendly (recommended, free tier available)
    1. Create a free account at https://calendly.com
    2. Set up your event types (e.g. "60 min Tutoring Session")
    3. Add VITE_CALENDLY_URL=https://calendly.com/your-username to your .env

  Option B — Google Calendar Appointment Schedule
    1. In Google Calendar, create an "Appointment schedule"
    2. Click Share → Copy booking link
    3. Replace the Calendly URL with your Google booking URL

  If no env var is set, the component shows a fallback contact prompt.
*/

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL

// Loads the Calendly widget CSS & JS only when needed (lazy)
function useCalendlyWidget() {
  useEffect(() => {
    if (!CALENDLY_URL) return

    // Inject Calendly's stylesheet
    const link = document.createElement('link')
    link.rel  = 'stylesheet'
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    document.head.appendChild(link)

    // Inject Calendly's script
    const script = document.createElement('script')
    script.src   = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.head.removeChild(link)
      document.body.removeChild(script)
    }
  }, [])
}

export default function Booking() {
  useCalendlyWidget()
  const containerRef = useRef(null)

  // Initialize the inline Calendly widget once the script has loaded
  useEffect(() => {
    if (!CALENDLY_URL || !containerRef.current) return

    const tryInit = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: containerRef.current,
          prefill: {},
          utm: {},
        })
      }
    }

    // Script may already be loaded or needs a moment
    const t = setTimeout(tryInit, 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="booking" className={styles.section}>
      <div className="section-inner">
        <h2 className="section-title">Book a Session</h2>
        <p className="section-subtitle">
          Pick a time that works for you. First session includes a free
          15-minute consultation to match you with the right plan.
        </p>

        {CALENDLY_URL ? (
          /* Calendly inline widget container */
          <div
            ref={containerRef}
            className={styles.calendlyContainer}
            aria-label="Booking calendar"
          >
            <div className={styles.calLoading}>
              <div className={styles.spinner} aria-hidden="true" />
              <p>Loading calendar…</p>
            </div>
          </div>
        ) : (
          /* Fallback when no URL is configured */
          <div className={styles.fallback}>
            <div className={styles.fallbackIcon} aria-hidden="true">📅</div>
            <h3>Scheduling Coming Soon</h3>
            <p>
              Online booking will be live shortly. In the meantime, use the
              contact form below and we'll find a time together.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact to Schedule
            </a>

            <div className={styles.howItWorks}>
              <h4>How it works</h4>
              <ol>
                <li>
                  <span className={styles.step}>1</span>
                  Send a message with your subject, grade level, and availability.
                </li>
                <li>
                  <span className={styles.step}>2</span>
                  We'll confirm a time and send a video link (or arrange in-person).
                </li>
                <li>
                  <span className={styles.step}>3</span>
                  Your first session includes a free 15-min intro call.
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
