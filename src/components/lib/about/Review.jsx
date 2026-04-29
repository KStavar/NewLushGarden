'use client'
import React, { useState } from 'react'
import styles from '@/style/Review.module.css'
import ModalWindow from '../../lib/ModalWindow'
import ReviewForm from '../../lib/ReviewForm'

export default function Review({ reviews }) {
  const [isOpen, setIsOpen] = useState(false);
  const avatars = ['🌵', '🌿', '🌱', '🍃', '🌻', '🌸', '🪴', '🍀', '🌞', '✨'];

  return (
    <div>
      <section className={styles.secWDTSAU}>
        <div className={styles.divWDTSAU}>
          <h2 className={styles.h2WDTSAU}>What Do They Say About Us</h2>
        </div>

        {/* Кнопка открытия */}
        <div className={styles.buttonContainer}>
          <button className={styles.addReviewBtn} onClick={() => setIsOpen(true)}>
            Leave Your Review
          </button>
        </div>

        <div className={styles.divReview}>
          {reviews && reviews.length > 0 ? (
            reviews.map((review, index) => {
              const item = review.attributes || review;
              const emojiAvatar = avatars[index % avatars.length];
              
              const rating = item.Rating || 5;
              const firstRow = "⭐".repeat(Math.min(rating, 5));
              const secondRow = rating > 5 ? "⭐".repeat(rating - 5) : null;

              return (
                <div key={review.id} className={styles.review}>
                  <div className={styles.reviewH3Img}>
                    <div className={styles.avatarWrapper}>
                      {emojiAvatar}
                    </div>
                    
                    <div>
                      <h3 className={styles.h3Review}>{item.Name}</h3>
                      <div className={styles.ratingInfo}>
                        <span className={styles.stars}>{firstRow}</span>
                        {secondRow && <span className={styles.stars}>{secondRow}</span>}
                        <span className={styles.ratingNumber}>({rating}/10)</span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.pReview}>{item.Comment}</p>
                </div>
              );
            })
          ) : (
            <p style={{textAlign: 'center', color: 'white'}}>No reviews yet.</p>
          )}
        </div>
      </section>

      {isOpen && (
        <ModalWindow onClose={() => setIsOpen(false)} title="Share your experience">
          <ReviewForm onClose={() => setIsOpen(false)} />
        </ModalWindow>
      )}
    </div>
  )
}