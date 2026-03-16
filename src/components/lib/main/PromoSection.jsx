import styles from '@/style/PromoSection.module.css'
import Image from "next/image"
import Link from 'next/link'

export default function PromoSection() {
  return (
    <section className={styles.promoSection}>
      <div className={styles.h1}>
        <h1>Nature's Beauty Delivered to You</h1>
      </div>

      <div className={styles.headerText}>
        Nature's beauty is just a click away with our online flower and plant shop.
        We offer a wide variety of flowers that will bring a touch of nature to your home!
      </div>

      <div className={styles.divHeaderButtons}>
        <button className={styles.bookButton}>
          <p className={styles.bookButtonText}>Book Now</p>
        </button>

        <button className={styles.videoButton}>
          <Link href={'/'} className={styles.videoLink}>
            <Image src="/material-symbols_play-circle-outline-rounded.png" width={24} height={24} alt="logo" />
            Watch Video
          </Link>
        </button>
      </div>
    </section>
  )
}
