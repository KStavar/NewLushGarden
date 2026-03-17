import styles from '@/style/Contact.module.css'
import contacts from '@/data/contact.json'

export default function Contact({ onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.contactContent}>
          <h2>Our contacts</h2>
          <div className={styles.info}>
            {contacts.map((contact, index) => (
              <p key={index}>
                <b>{contact.label}</b>{" "}
                {contact.href ? (
                  <a href={contact.href}>{contact.value}</a>
                ) : (
                  contact.value
                )}
              </p>
            ))}
          </div>
          <button className={styles.modalClose} onClick={onClose}>
            ×
          </button>
        </div>
      </div>
    </div>
  )
}
