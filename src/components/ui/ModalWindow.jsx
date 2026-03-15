import '@/style/modalWindow.css'
export default function Modal({ onClose }) {


  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="modalClose" onClick={onClose}>
          ×
        </button>
        <h2>Модальное окно</h2>
        <p>Это обычная модалка в Next.js</p>
      </div>
    </div>
  );
}