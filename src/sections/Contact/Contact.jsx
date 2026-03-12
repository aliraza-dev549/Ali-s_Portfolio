import profileImage from '../../assets/home.png'
import '../../pages/ContactPage/ContactPage.css'

function Contact() {
  return (
    <section id="contact" className="contact-page fade-in">
      <div className="contact-page__hero">
      <div className="section__wrap">
        <h2 className="contact-page__title">Let&apos;s Connect</h2>
        <p className="contact-page__subtitle">
          Ready to bring your ideas to life? Let&apos;s discuss your project and create something
          amazing together.
        </p>

        <div className="contact-page__grid">
          <article className="contact-page__socialWrap">
            <div className="contact-page__socialHead">
              <h3>Connect With Me</h3>
              <p>
                I prefer connecting via social platforms. Reach out on LinkedIn, check my work on
                GitHub, or follow along on Instagram.
              </p>
            </div>

            <div className="contact-page__socialBlock">
              <h4>Social Profiles</h4>
              <p>Select a platform below to reach me directly.</p>

              <div className="contact-page__socialList">
                <a
                  href="https://www.linkedin.com/in/ali-raza-3ba186358"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-page__socialItem"
                >
                  <span className="contact-page__socialIcon">in</span>
                  <div>
                    <h5>LinkedIn</h5>
                    <small>Connect with me professionally and follow my career journey.</small>
                  </div>
                </a>

                <a href="https://github.com/aliraza-dev549" target="_blank" rel="noreferrer" className="contact-page__socialItem">
                  <span className="contact-page__socialIcon">GH</span>
                  <div>
                    <h5>GitHub</h5>
                    <small>Check out my latest projects and open-source contributions.</small>
                  </div>
                </a>

                <a href="mailto:aliraza.dev549@gmail.com" className="contact-page__socialItem">
                  <span className="contact-page__socialIcon">✉</span>
                  <div>
                    <h5>Gmail</h5>
                    <small>Send me an email directly for project discussions and collaboration.</small>
                  </div>
                </a>
              </div>
            </div>
          </article>

          <aside className="contact-page__side">
            <h3>Contact Information</h3>

            <article className="contact-page__infoCard">
              <div className="contact-page__profileTop">
                <img src={profileImage} alt="Ali Raza" />
                <div>
                  <h4>Ali Raza</h4>
                  <p>● Available for work</p>
                </div>
              </div>

              <div className="contact-page__socialRow">
                <a href="https://github.com/aliraza-dev549" target="_blank" rel="noreferrer" aria-label="GitHub">
                  GH
                </a>
                <a
                  href="https://www.linkedin.com/in/ali-raza-3ba186358"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a href="mailto:aliraza.dev549@gmail.com" aria-label="Email">
                  ✉
                </a>
              </div>

              <p className="contact-page__miniText">
                My inbox is always open. Whether you have a project or just want to say hi, I
                would love to hear from you.
              </p>
            </article>

            <article className="contact-page__smallCard">
              <h5>Phone</h5>
              <a href="tel:+923096894742">+92-3096894742</a>
            </article>

            <article className="contact-page__smallCard">
              <h5>Email</h5>
              <a href="mailto:aliraza.dev549@gmail.com">aliraza.dev549@gmail.com</a>
            </article>
          </aside>
        </div>

        <section className="contact-page__benefits" aria-label="What you get when you work with me">
          <h3 className="contact-page__benefitsTitle">What You Get When You Work With Me</h3>

          <div className="contact-page__benefitsGrid">
            <article className="contact-page__benefitCard">
              <span className="contact-page__benefitNumber">1</span>
              <h4>Quick Turnaround</h4>
              <p>Fast delivery without compromising quality</p>
            </article>

            <article className="contact-page__benefitCard">
              <span className="contact-page__benefitNumber">2</span>
              <h4>24/7 Support</h4>
              <p>Available for urgent fixes and consultations</p>
            </article>

            <article className="contact-page__benefitCard">
              <span className="contact-page__benefitNumber">3</span>
              <h4>Modern Tech Stack</h4>
              <p>Using latest technologies for future-proof solutions</p>
            </article>

            <article className="contact-page__benefitCard">
              <span className="contact-page__benefitNumber">4</span>
              <h4>SEO Optimized</h4>
              <p>Built with search engine optimization in mind</p>
            </article>
          </div>
        </section>
      </div>
      </div>
    </section>
  )
}

export default Contact
