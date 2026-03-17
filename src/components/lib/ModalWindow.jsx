import styles from '@/style/ModalWindow.module.css'

export default function Modal({ onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popupContent}>
          <button className={styles.modalClose} onClick={onClose}>×</button>
          <h2>
            Enter Your Email Address For Our <br/>
            Mailing Promo or Other Interesting <br/>
            Things
          </h2>

          <div className={styles.emailButton}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.inputEmail}
            />

            <button className={styles.submitButton}>
              <a className={styles.navLink} href="" target="_blank">
                <p>Submit</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
