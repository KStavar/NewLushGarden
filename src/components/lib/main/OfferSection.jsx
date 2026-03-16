import Image from "next/image"
import styles from '@/style/OfferSection.module.css'

const plants = [
  { img: "/Rectangle 21.png", name: "Cactus Plant", price: "8$" },
  { img: "/Rectangle 1.png", name: "Cactus Plant", price: "8$" },
  { img: "/Rectangle 6.png", name: "Cactus Plant", price: "8$" },
  { img: "/Rectangle 7.png", name: "Cactus Plant", price: "8$" },
  { img: "/Rectangle 11.png", name: "Cactus Plant", price: "8$" },
  { img: "/Rectangle 9.png", name: "Cactus Plant", price: "8$" },
  { img: "/Rectangle 2.png", name: "Cactus Plant", price: "8$" },
  { img: "/pexels-hanna-auramenka-8497490 1.png", name: "Cactus Plant", price: "8$" },
]

export default function OfferSection() {
  return (
    <section className={styles.whatWeOffer}>

      <div className={styles.divWhatWeOffer}>
        <h2 className={styles.h2WhatWeOffer}>What We Offer To You</h2>
      </div>
      
      <div className={styles.divAllCactusPlants}>
        {plants.map((plant, index) => (
          <div className={styles.cactusPlant} key={index}>

            <Image
              className={styles.imgCactusPlant}
              src={plant.img}
              width={250}
              height={250}
              alt={plant.name}
            />

            <div className={styles.divCactusAndPrice}>
              <div>
                <p className={styles.pCactusPlant}>{plant.name}</p>
                <p className={styles.pPrice}>{plant.price}</p>
              </div>

              <a href="#" className={styles.buttonCactusPlant}>Buy Now</a>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
