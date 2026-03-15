import '@/style/modalWindow.css'
export default function Modal({ onClose }) {


  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="popup-content">
        <button className="modalClose" onClick={onClose}>
          ×
        </button>
            <h2>Enter Your Email Address For Our <br/>
                Mailing Promo or Other Interesting <br/>
                Things</h2>

          <div className="email-button">
             <input type="email" name="" placeholder="Enter your email" id="input-email"/>

              <button className="a-header-button-submit">
                 <a className="a-nav-list-item" href="" target="_blank">
                      <p>Submit</p>
                </a>
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}