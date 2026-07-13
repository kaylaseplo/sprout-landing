const PAIN_POINTS = [
  {
    icon: '📋',
    text: 'Planning activities from scratch, every single day',
  },
  {
    icon: '📸',
    text: 'Photos, updates, and notes competing with actually being present with the kids',
  },
  {
    icon: '🧠',
    text: 'When a great teacher leaves, everything they learned leaves too',
  },
  {
    icon: '🌱',
    text: 'New teachers get thrown in with no in-the-moment support',
  },
]

function Problem() {
  return (
    <section className="section problem">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Sound familiar?</p>
          <h2>You didn&rsquo;t become a teacher to be a paperwork person</h2>
          <p>
            Early childhood education is one of the most demanding jobs there
            is — and most of the tools built for it were made for parents and
            administrators, not for the person in the room with the kids.
          </p>
        </div>

        <ul className="pain-list">
          {PAIN_POINTS.map((point) => (
            <li key={point.text} className="pain-item">
              <span className="pain-icon" aria-hidden="true">
                {point.icon}
              </span>
              <p>{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Problem
