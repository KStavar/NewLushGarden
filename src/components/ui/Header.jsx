'use client'
import Image from "next/image"
import Link from "next/link"
import modalStyles from '@/style/ModalWindow.module.css'
import headerStyles from '@/style/Header.module.css'
import { usePathname } from "next/navigation"
import { useState } from "react"
import ModalWindow from "../lib/ModalWindow"
import Contact from "./Contact"

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <header className={pathname === '/' ? headerStyles.header : headerStyles.headerGradient}>
      <div className={headerStyles.logo}>
        <Link href="/">
          <Image src="/Mask_group.png" width={100} height={60} alt="logo" />
        </Link>
      </div>

      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navListItem}>
            <Link href="/" className={headerStyles.navLink}>Home</Link>
          </li>
          <li className={headerStyles.navListItem}>
            <Link href="/about-us" className={headerStyles.navLink}>About Us</Link>
          </li>
          <li className={headerStyles.navListItem}>
            <Link href="/gallery" className={headerStyles.navLink}>Gallery</Link>
          </li>
          <li className={headerStyles.contactNavListItem} onClick={() => setOpenContact(!openContact)}>Contact</li>
          <li className={headerStyles.separatedNavListItem} onClick={() => setOpen(!open)}>Details</li>
        </ul>
      </nav>

      {openContact && <Contact onClose={() => setOpenContact(false)} />}

      {open && (
        <ModalWindow
          onClose={() => setOpen(false)} 
          title="Enter Your Email Address For Our Mailing Promo"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className={`${modalStyles.inputEmail} ${headerStyles.inputEmailExtra}`}
          />
          <button className={`${modalStyles.submitButton} ${headerStyles.specialButton}`}>
            <a className={`${modalStyles.navLink} ${headerStyles.navLinkExtra}`} href={window.location.pathname}>
              <p>Submit</p>
            </a>
          </button>
        </ModalWindow>
      )}
    </header>
  )
}
