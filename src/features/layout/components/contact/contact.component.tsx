import styles from './contact.module.scss'

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__header}>
          <h2 className={styles.contact__title}>Let's Connect</h2>
          <p className={styles.contact__subtitle}>
            I'm always interested in new opportunities and exciting projects
          </p>
        </div>

        <div className={styles.contact__content}>
          <div className={styles.contact__info}>
            <div className={styles.contact__card}>
              <div className={styles.contact__card__icon}>📧</div>
              <h3 className={styles.contact__card__title}>Email</h3>
              <p className={styles.contact__card__text}>griffin.romley@example.com</p>
              <a href="mailto:griffin.romley@example.com" className={styles.contact__card__link}>
                Send Email
              </a>
            </div>

            <div className={styles.contact__card}>
              <div className={styles.contact__card__icon}>💼</div>
              <h3 className={styles.contact__card__title}>LinkedIn</h3>
              <p className={styles.contact__card__text}>Connect with me professionally</p>
              <a href="#" className={styles.contact__card__link} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>

            <div className={styles.contact__card}>
              <div className={styles.contact__card__icon}>🐙</div>
              <h3 className={styles.contact__card__title}>GitHub</h3>
              <p className={styles.contact__card__text}>Check out my code</p>
              <a href="#" className={styles.contact__card__link} target="_blank" rel="noopener noreferrer">
                View Repos
              </a>
            </div>
          </div>

          <div className={styles.contact__form}>
            <h3 className={styles.contact__form__title}>Send me a message</h3>
            <form className={styles.form}>
              <div className={styles.form__group}>
                <label htmlFor="name" className={styles.form__label}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className={styles.form__input}
                  placeholder="Your name"
                />
              </div>

              <div className={styles.form__group}>
                <label htmlFor="email" className={styles.form__label}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className={styles.form__input}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.form__group}>
                <label htmlFor="message" className={styles.form__label}>Message</label>
                <textarea 
                  id="message" 
                  className={styles.form__textarea}
                  rows={5}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className={styles.form__button}>
                <span>Send Message</span>
                <span className={styles.form__button__icon}>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 