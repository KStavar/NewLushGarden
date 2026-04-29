import React from 'react'
import Image from 'next/image'
import styles from '@/style/AboutProducts.module.css'
import productsData from '@/data/aboutProducts.json' 

export default function AboutProducts() {
  return (
    <section className={styles.secAboutProducts}>
      <div className={styles['divH2About']}>
        <h2 className={styles['h2About']}>About Us</h2>
        </div>

        <div className={styles['divH2Empty']}>
        </div>


      <div className={styles.innerdivAboutProducts}>
      <Image 
        className={styles.imgAboutProducts} 
        src="/pexels-cottonbro-studio-4507715 1.png" 
        alt="Flowers" 
        width={1200} 
        height={1200}
      />
      <div className={styles.aboutProducts}>
        {productsData.map(product => (
          <div key={product.id} className={styles.divProducts}>
            <Image 
              className={styles.productsSvg} 
              src={product.icon} 
              alt={product.title} 
              width={126} 
              height={126} 
            />
            <h3 className={styles.h3Products}>{product.title}</h3>
            <p className={styles.pProducts}>{product.text}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
