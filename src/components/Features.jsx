const FEATURES = [
  {
    icon: '📸',
    title: 'Smart Photo Documentation',
    description:
      'Say a name while you snap the photo. Sprout tags the right kids and drafts the caption. Review for 2 seconds, send. What used to take 3 minutes now takes 5 seconds.',
  },
  {
    icon: '🎨',
    title: 'Activity Generator',
    description:
      'Tell Sprout the energy in the room, the time you have, and what’s in the supply closet. Get 3 age-appropriate activity ideas — with the reasoning behind them — instantly.',
  },
  {
    icon: '💬',
    title: 'Behavior & Development Chat',
    description:
      'A toddler is biting when frustrated. A child won’t separate at drop-off. Ask Sprout and get practical, classroom-ready guidance grounded in real child development — right when you need it.',
  },
  {
    icon: '🗂️',
    title: 'Classroom Knowledge Base',
    description:
      'Every activity rating and behavior note builds a living profile of your classroom, so a new teacher inherits years of hard-won know-how instead of starting from a blank slate.',
  },
]

function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How Sprout helps</p>
          <h2>Built around your day, not your paperwork</h2>
        </div>

        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
