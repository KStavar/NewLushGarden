import styles from '@/style/ModalWindow.module.css'

export default function ModalWindow({ onClose, title, children }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popupContent}>
          <button className={styles.modalClose} onClick={onClose}>×</button>
          {title && <h2>{title}</h2>}
          <div className={styles.emailButton}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
