import '@/style/Contact.css'
export default function Contact({ onClose }) {

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        
        <button className="modalClose" onClick={onClose}>
          ×
        </button>
            
      </div>
    </div>
  );
}