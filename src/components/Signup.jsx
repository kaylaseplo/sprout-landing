import { useId, useState } from 'react'

const ROLES = [
  { value: 'director', label: 'Director' },
  { value: 'teacher', label: 'Teacher' },
]

function Signup() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('teacher')
  const [error, setError] = useState('')
  const [submittedEmail, setSubmittedEmail] = useState(null)
  const emailId = useId()

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedEmail = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    setSubmittedEmail(trimmedEmail)
  }

  if (submittedEmail) {
    return (
      <section className="section signup" id="signup">
        <div className="container">
          <div className="signup-card signup-success">
            <span className="signup-success-icon" aria-hidden="true">
              🌱
            </span>
            <h2>You&rsquo;re on the list!</h2>
            <p>
              We&rsquo;ll email <strong>{submittedEmail}</strong> the moment
              early access opens. Thanks for caring about the classroom.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section signup" id="signup">
      <div className="container">
        <div className="signup-card">
          <div className="section-head signup-head">
            <p className="eyebrow">Early access</p>
            <h2>Be first to bring Sprout to your classroom</h2>
            <p>
              We&rsquo;re building this with real nursery directors and
              teachers. Join the list and we&rsquo;ll reach out as soon as
              early access opens.
            </p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <fieldset className="role-toggle">
              <legend>I&rsquo;m a&hellip;</legend>
              <div className="role-toggle-options">
                {ROLES.map((option) => (
                  <label
                    key={option.value}
                    className={
                      role === option.value
                        ? 'role-option role-option-active'
                        : 'role-option'
                    }
                  >
                    <input
                      type="radio"
                      name="role"
                      value={option.value}
                      checked={role === option.value}
                      onChange={() => setRole(option.value)}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="signup-field">
              <label htmlFor={emailId}>Email address</label>
              <div className="signup-input-row">
                <input
                  id={emailId}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@yournursery.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `${emailId}-error` : undefined}
                />
                <button type="submit" className="btn btn-primary">
                  Get early access
                </button>
              </div>
              {error && (
                <p id={`${emailId}-error`} className="signup-error">
                  {error}
                </p>
              )}
            </div>

            <p className="signup-privacy">
              No spam. Just an update when we&rsquo;re ready for you.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Signup
