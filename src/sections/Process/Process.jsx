import './Process.css'

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'Understanding your goals, audience, and requirements to craft a tailored roadmap for success.',
  },
  {
    number: '02',
    title: 'Development & Architecture',
    description:
      'Building scalable applications with modern technologies, writing clean maintainable code.',
  },
  {
    number: '03',
    title: 'Testing & Quality Assurance',
    description:
      'Rigorous testing across multiple scenarios to ensure reliability, performance, and quality.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'Seamless deployment, optimization, and support to ensure long-lasting impact.',
  },
]

function Process() {
  return (
    <section id="process" className="process fade-in">
      <div className="section__wrap">
        <p className="section__tag process__tag">PROCESS</p>
        <h2 className="section__title process__title">How I Work</h2>
        <p className="section__desc process__desc">
          A proven, structured approach that ensures every project delivers maximum value.
        </p>

        <div className="process__grid">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="process__card fade-in-item hover-zoom"
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <span className="process__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
