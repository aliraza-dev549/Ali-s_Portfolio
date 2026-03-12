import '../../pages/HireMePage/HireMePage.css'

const whyChooseItems = [
  {
    icon: '⌘',
    title: 'Full-Stack Development',
    badge: '3+ Years Experience',
    text: 'Building scalable web applications with modern technologies like React, Next.js, Node.js, and databases.',
  },
  {
    icon: '✓',
    title: 'UI/UX Design Excellence',
    badge: '10+ Projects Delivered',
    text: 'Crafting intuitive and visually stunning interfaces that enhance user engagement and conversion rates.',
  },
  {
    icon: '◔',
    title: 'Performance Optimization',
    badge: '98% Client Satisfaction',
    text: 'Ensuring your applications load fast, rank well in search engines, and provide seamless user experiences.',
  },
]

const workBenefits = [
  {
    number: '1',
    title: 'Quick Turnaround',
    text: 'Fast delivery without compromising quality',
  },
  {
    number: '2',
    title: '24/7 Support',
    text: 'Available for urgent fixes and consultation',
  },
  {
    number: '3',
    title: 'Modern Tech Stack',
    text: 'Using latest technologies for future-proof solutions',
  },
  {
    number: '4',
    title: 'SEO Optimized',
    text: 'Built with search engine optimization in mind',
  },
]

function Hire() {
  return (
    <section id="hire" className="hire-page fade-in">
      <div className="hire-page__hero">
        <div className="section__wrap">
          <p className="hire-page__subtitle">
            Transform your digital vision into reality with a passionate developer who delivers
            exceptional results. Ready to take your project to the next level?
          </p>

          <div className="hire-page__grid">
            <article className="hire-page__formWrap">
              <div className="hire-page__formInner">
                <h3>Start Your Project</h3>
                <p>bring your ideas to life? Let&apos;s discuss your project requirements.</p>

                <form onSubmit={(event) => event.preventDefault()}>
                  <div className="hire-page__row">
                    <div>
                      <label htmlFor="hireFirstName">First Name</label>
                      <input id="hireFirstName" type="text" />
                    </div>
                    <div>
                      <label htmlFor="hireLastName">Last Name</label>
                      <input id="hireLastName" type="text" />
                    </div>
                  </div>

                  <div className="hire-page__row">
                    <div>
                      <label htmlFor="hireEmail">Email Address</label>
                      <input id="hireEmail" type="email" />
                    </div>
                    <div>
                      <label htmlFor="hirePhone">Phone Number</label>
                      <input id="hirePhone" type="tel" />
                    </div>
                  </div>

                  <div className="hire-page__field">
                    <label htmlFor="hireMessage">Your Message</label>
                    <textarea id="hireMessage" placeholder="Type your message here" rows="6"></textarea>
                  </div>

                  <div className="hire-page__actions">
                    <button type="submit" className="hire-page__btn hire-page__btn--send">
                      Send →
                    </button>
                    <button type="reset" className="hire-page__btn hire-page__btn--reset">
                      Reset →
                    </button>
                  </div>
                </form>
              </div>
            </article>

            <aside className="hire-page__side">
              <h3>
                Why Choose <span>Me?</span>
              </h3>

              <div className="hire-page__whyList">
                {whyChooseItems.map((item) => (
                  <article className="hire-page__whyCard" key={item.title}>
                    <div className="hire-page__whyHead">
                      <span className="hire-page__whyIcon">{item.icon}</span>
                      <h4>{item.title}</h4>
                      <span className="hire-page__whyBadge">{item.badge}</span>
                    </div>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </aside>
          </div>

          <article className="hire-page__benefits">
            <h3>What You Get When You Work With Me</h3>

            <div className="hire-page__benefitGrid">
              {workBenefits.map((item) => (
                <article className="hire-page__benefitCard" key={item.number}>
                  <span className="hire-page__benefitNumber">{item.number}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Hire
