import React from 'react'
import '@/style/Review.css'

export default function Review() {
  return (
    <div>
       <section className="sec-w-d-t-s-a-u">
        <div className="div-w-d-t-s-a-u">
            <h2 className="h2-w-d-t-s-a-u">What Do They Say About Us</h2>
        </div>

        <div className="div-review">
            <div className="review">
                <div className="review-h3-img"> <img src="/Rectangle@1x.png" alt=""/>
                    <h3 className="h3-review">Doris Watson</h3>
                </div>
                <p className="p-review">“Highly recommend this website for quality flowers and plants. Great prices, timely
                    delivery and
                    excellent customer service. ”</p>
            </div>
            <div className="review">
                <div className="review-h3-img"> <img src="/Rectangle@2x.png" alt=""/>
                    <h3 className="h3-review">Kate Shu</h3>
                </div>
                <p className="p-review">"Great service, beautiful flowers, timely delivery. Highly recommend.”</p>
            </div>
            <div className="review">
                <div className="review-h3-img">
                    <img src="/Rectangle3.png" alt=""/>
                    <h3 className="h3-review">Dyness</h3>
                </div>
                <p className="p-review">"I am very happy with my purchase from this website, the plants were healthy and
                    arrived on time.”</p>
            </div>
        </div>
    </section>

    </div>
  )
}
