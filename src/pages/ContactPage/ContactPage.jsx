import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import profileImage from '../../assets/home.png'
import './ContactPage.css'

function ContactPage({ currentPath, onNavigate, isLightMode, onToggleTheme }) {
  return (
    <>
      <Header currentPath={currentPath} onNavigate={onNavigate} isLightMode={isLightMode} onToggleTheme={onToggleTheme} />

      <main className="contact-page" id="contact-page">
        <section className="contact-page__hero">
          <div className="section__wrap">
            <h1 className="contact-page__title">Let&apos;s Connect</h1>
            <p className="contact-page__subtitle">
              Ready to bring your ideas to life? Let&apos;s discuss your project and create something
              amazing together.
            </p>

            <div className="contact-page__grid">
              <article className="contact-page__formWrap">
                <div className="contact-page__formInner">
                  <h2>Let&apos;s Work Together</h2>
                  <p>Let&apos;s create something amazing together!</p>

                  <form onSubmit={(event) => event.preventDefault()}>
                    <div className="contact-page__row">
                      <div>
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" />
                      </div>
                      <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" type="text" />
                      </div>
                    </div>

                    <div className="contact-page__row">
                      <div>
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" />
                      </div>
                      <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type="tel" />
                      </div>
                    </div>

                    <div className="contact-page__field">
                      <label htmlFor="message">Your Message</label>
                      <textarea id="message" placeholder="Type your message here" rows="6"></textarea>
                    </div>

                    <div className="contact-page__actions">
                      <button type="submit" className="contact-page__btn contact-page__btn--send">
                        Send ↗
                      </button>
                      <button type="reset" className="contact-page__btn contact-page__btn--reset">
                        Reset ↗
                      </button>
                    </div>
                  </form>
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
                    <a href="https://wa.me" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                      WA
                    </a>
                    <a href="https://github.com/aliraza-dev549" target="_blank" rel="noreferrer" aria-label="GitHub">
                      GH
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ContactPage
