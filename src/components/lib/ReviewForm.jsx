'use client'
import { useState } from 'react'
import modalStyles from '@/style/ModalWindow.module.css'

export default function ReviewForm({ onClose }) {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(10)

  const sendReview = async (e) => {
    e.preventDefault()
    
    // Проверка на всякий случай
    if (rating < 1 || rating > 10) {
      alert("Please enter a rating between 1 and 10");
      return;
    }

    const data = {
      data: {
        Name: name,
        Comment: comment,
        Rating: Number(rating)
      }
    }

    try {
      const res = await fetch('http://127.0.0.1:1337/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        alert('Thank you! Your review has been sent.');
        onClose();
        window.location.reload(); 
      }
    } catch (err) {
      console.error("Error sending review:", err)
    }
  }

  return (
    <form onSubmit={sendReview} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <input 
        className={modalStyles.inputEmail}
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ color: 'white', fontSize: '14px' }}>Rating (1 to 10):</label>
        <input 
          className={modalStyles.inputEmail}
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </div>

      <textarea 
        className={modalStyles.inputEmail}
        style={{ minHeight: '100px', paddingTop: '10px', resize: 'none' }}
        placeholder="Your Message" 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        required 
      />
      
      <button type="submit" className={modalStyles.submitButton}>
        Submit Review
      </button>
    </form>
  )
}