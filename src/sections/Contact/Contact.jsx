import profileImage from '../../assets/home.png'
import '../../pages/ContactPage/ContactPage.css'

function Contact() {
  return (
    <section id="contact" className="contact-page">
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
                  <span className="contact-page__socialIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56C7.14 3.8 6.28 3 5.25 3c-1.03 0-1.88.8-1.88 1.94 0 1.1.83 1.94 1.84 1.94h.02c1.05 0 1.92-.83 1.92-1.94ZM20.44 13.42c0-3.38-1.8-4.95-4.2-4.95-1.94 0-2.8 1.09-3.29 1.85V8.5H9.57c.04 1.2 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.04 1.88 2.58V20h3.38v-6.58Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <div>
                    <h5>LinkedIn</h5>
                    <small>Connect with me professionally and follow my career journey.</small>
                  </div>
                </a>

                <a href="https://github.com/aliraza-dev549" target="_blank" rel="noreferrer" className="contact-page__socialItem">
                  <span className="contact-page__socialIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2C6.477 2 2 6.595 2 12.262c0 4.534 2.865 8.38 6.839 9.737.5.095.683-.22.683-.49 0-.24-.009-.874-.014-1.716-2.782.617-3.369-1.371-3.369-1.371-.455-1.178-1.11-1.492-1.11-1.492-.907-.632.069-.62.069-.62 1.003.072 1.53 1.055 1.53 1.055.892 1.558 2.341 1.108 2.91.847.09-.663.35-1.108.637-1.363-2.222-.26-4.558-1.136-4.558-5.058 0-1.118.39-2.032 1.03-2.748-.104-.261-.447-1.314.098-2.738 0 0 .84-.276 2.75 1.05A9.36 9.36 0 0 1 12 6.87a9.36 9.36 0 0 1 2.504.348c1.91-1.326 2.748-1.05 2.748-1.05.547 1.424.204 2.477.1 2.738.64.716 1.03 1.63 1.03 2.748 0 3.932-2.34 4.795-4.57 5.05.36.318.68.942.68 1.898 0 1.37-.012 2.475-.012 2.813 0 .273.18.59.688.49A10.28 10.28 0 0 0 22 12.262C22 6.595 17.523 2 12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <div>
                    <h5>GitHub</h5>
                    <small>Check out my latest projects and open-source contributions.</small>
                  </div>
                </a>

                <a href="mailto:aliraza.dev549@gmail.com" className="contact-page__socialItem">
                  <span className="contact-page__socialIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Zm8 5.78L5.3 8.5h13.4L12 12.28Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
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
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path
                      d="M12 2C6.477 2 2 6.595 2 12.262c0 4.534 2.865 8.38 6.839 9.737.5.095.683-.22.683-.49 0-.24-.009-.874-.014-1.716-2.782.617-3.369-1.371-3.369-1.371-.455-1.178-1.11-1.492-1.11-1.492-.907-.632.069-.62.069-.62 1.003.072 1.53 1.055 1.53 1.055.892 1.558 2.341 1.108 2.91.847.09-.663.35-1.108.637-1.363-2.222-.26-4.558-1.136-4.558-5.058 0-1.118.39-2.032 1.03-2.748-.104-.261-.447-1.314.098-2.738 0 0 .84-.276 2.75 1.05A9.36 9.36 0 0 1 12 6.87a9.36 9.36 0 0 1 2.504.348c1.91-1.326 2.748-1.05 2.748-1.05.547 1.424.204 2.477.1 2.738.64.716 1.03 1.63 1.03 2.748 0 3.932-2.34 4.795-4.57 5.05.36.318.68.942.68 1.898 0 1.37-.012 2.475-.012 2.813 0 .273.18.59.688.49A10.28 10.28 0 0 0 22 12.262C22 6.595 17.523 2 12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ali-raza-3ba186358"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path
                      d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56C7.14 3.8 6.28 3 5.25 3c-1.03 0-1.88.8-1.88 1.94 0 1.1.83 1.94 1.84 1.94h.02c1.05 0 1.92-.83 1.92-1.94ZM20.44 13.42c0-3.38-1.8-4.95-4.2-4.95-1.94 0-2.8 1.09-3.29 1.85V8.5H9.57c.04 1.2 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.04 1.88 2.58V20h3.38v-6.58Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a href="mailto:aliraza.dev549@gmail.com" aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path
                      d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Zm8 5.78L5.3 8.5h13.4L12 12.28Z"
                      fill="currentColor"
                    />
                  </svg>
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
