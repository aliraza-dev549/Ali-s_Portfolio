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
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path
                          d="M12 2C6.477 2 2 6.595 2 12.262c0 4.534 2.865 8.38 6.839 9.737.5.095.683-.22.683-.49 0-.24-.009-.874-.014-1.716-2.782.617-3.369-1.371-3.369-1.371-.455-1.178-1.11-1.492-1.11-1.492-.907-.632.069-.62.069-.62 1.003.072 1.53 1.055 1.53 1.055.892 1.558 2.341 1.108 2.91.847.09-.663.35-1.108.637-1.363-2.222-.26-4.558-1.136-4.558-5.058 0-1.118.39-2.032 1.03-2.748-.104-.261-.447-1.314.098-2.738 0 0 .84-.276 2.75 1.05A9.36 9.36 0 0 1 12 6.87a9.36 9.36 0 0 1 2.504.348c1.91-1.326 2.748-1.05 2.748-1.05.547 1.424.204 2.477.1 2.738.64.716 1.03 1.63 1.03 2.748 0 3.932-2.34 4.795-4.57 5.05.36.318.68.942.68 1.898 0 1.37-.012 2.475-.012 2.813 0 .273.18.59.688.49A10.28 10.28 0 0 0 22 12.262C22 6.595 17.523 2 12 2Z"
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ContactPage
