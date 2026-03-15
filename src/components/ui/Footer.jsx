import Image from "next/image"
import Link from "next/link"
import '@/style/Footer.css'
export default function Footer() {
  return (
    <footer className="footer">

      <div className="div-footer">

        <div className="div-footer-contacts">
          Feel free to contact us
        </div>

        <div className="div-footer-icons">

          <Link href="https://instagram.com" className="footer-icon">
            <Image src="/instagram.svg" width={30} height={30} alt="instagram" />
          </Link>

          <Link href="https://facebook.com" className="footer-icon">
            <Image src="/facebook-f.svg" width={30} height={30} alt="facebook" />
          </Link>

          <Link href="https://x.com" className="footer-icon">
            <Image src="/twitter.svg" width={30} height={30} alt="twitter" />
          </Link>

        </div>

        <ul className="ul-footer">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about-us">About us</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li>Delivery</li>
          <li>Blog</li>
          <li>Contact us</li>


        </ul>

        <div className="copyright">
          Copyright © 2024 Lush. All rights reserved.
        </div>

      </div>

    </footer>
  )
}