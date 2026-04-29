import Image from "next/image"
import styles from '@/style/OfferSection.module.css'

export default function OfferSection({ plants }) {
  const STRAPI_URL = "http://127.0.0.1:1337";

  if (!plants || plants.length === 0) return null;

  return (
    <section className={styles.whatWeOffer}>
      <div className={styles.divWhatWeOffer}>
        <h2 className={styles.h2WhatWeOffer}>What We Offer To You</h2>
      </div>
      
      <div className={styles.divAllCactusPlants}>
        {plants.map((plant) => {
          const item = plant.attributes || plant;
          
          const imagePath = item.IMG?.data?.attributes?.url || item.IMG?.url;
          const imageUrl = imagePath ? `${STRAPI_URL}${imagePath}` : null;

          return (
            <div className={styles.cactusPlant} key={plant.id}>
              <div className={styles.imgContainer}>
                {imageUrl ? (
                  <Image
                    className={styles.imgCactusPlant}
                    src={imageUrl}
                    width={250}
                    height={250}
                    alt={item.Name || "Plant"}
                    unoptimized={true}
                  />
                ) : (
                  <div className={styles.placeholder}>No Image</div>
                )}
              </div>

              <div className={styles.divCactusAndPrice}>
                <div>
                  <p className={styles.pCactusPlant}>{item.Name}</p>
                  <p className={styles.pPrice}>{item.Price}$</p>
                </div>
                <a href="#" className={styles.buttonCactusPlant}>Buy Now</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}