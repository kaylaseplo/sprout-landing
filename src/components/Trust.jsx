const TRUST_POINTS = [
  {
    icon: '🔒',
    text: 'No facial recognition, ever — child privacy is non-negotiable',
  },
  {
    icon: '🤝',
    text: 'Complements tools like Brightwheel and HiMama, doesn’t replace them',
  },
  {
    icon: '👩‍🏫',
    text: 'Built by someone with a child in nursery care, working alongside real teachers',
  },
]

function Trust() {
  return (
    <section className="section trust">
      <div className="container trust-inner">
        {TRUST_POINTS.map((point) => (
          <div key={point.text} className="trust-item">
            <span aria-hidden="true">{point.icon}</span>
            <p>{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trust
