/**
 * Form validation helpers.
 *
 * React escapes JSX output automatically (no dangerouslySetInnerHTML used),
 * so these functions focus on user-friendly error messages and preventing
 * junk / malformed data from reaching EmailJS.
 *
 * Each validator returns null on success, or an error string on failure.
 */

export const validateName = (name) => {
  if (!name || name.trim().length < 2) return 'Name must be at least 2 characters.'
  if (name.trim().length > 100) return 'Name must be under 100 characters.'
  return null
}

export const validateEmail = (email) => {
  if (!email || !email.trim()) return 'Email is required.'
  // Practical RFC 5322 subset — catches the vast majority of bad addresses
  const re = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
  if (!re.test(email.trim())) return 'Please enter a valid email address.'
  return null
}

export const validatePhone = (phone) => {
  if (!phone || !phone.trim()) return null // phone is optional
  const re = /^[\d\s\-\+\(\)\.]{7,20}$/
  if (!re.test(phone.trim())) return 'Please enter a valid phone number.'
  return null
}

export const validateMessage = (message) => {
  if (!message || message.trim().length < 10) return 'Message must be at least 10 characters.'
  if (message.trim().length > 2000) return 'Message must be under 2000 characters.'
  return null
}

export const validateSubject = (subject) => {
  if (!subject) return 'Please select a subject area.'
  return null
}

// Runs all field validators and returns a { fieldName: errorString } map.
// An empty object means the form is valid.
export const validateContactForm = ({ name, email, phone, subject, message }) => {
  const errors = {}
  const checks = {
    name: validateName(name),
    email: validateEmail(email),
    phone: validatePhone(phone),
    subject: validateSubject(subject),
    message: validateMessage(message),
  }
  for (const [field, err] of Object.entries(checks)) {
    if (err) errors[field] = err
  }
  return errors
}
