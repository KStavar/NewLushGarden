import '@/style/PromoSection.css'
import Image from "next/image"
import Link from 'next/link'

export default function PromoSection() {
  return (
    <section className="promo-section">
      <div className="h1">
        <h1>Nature's Beauty Delivered to You</h1>
      </div>

      <div className="header-text">
        Nature's beauty is just a click away with our online flower and plant shop.
        We offer a wide variety of flowers that will bring a touch of nature to your home!
      </div>

      <div className="div-header-buttons">
        <button className="a-header-button-book">
          <p className='p-header-button-book'>Book Now</p>
        </button>

        <button className="header-button-vid">
          <Link href={'/'} className='a-button-video'> <Image src="/material-symbols_play-circle-outline-rounded.png" width={24} height={24} alt="logo" />Watch Video</Link>
        </button>
      </div>
    </section>
  )
}