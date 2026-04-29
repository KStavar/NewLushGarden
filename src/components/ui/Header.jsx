'use client'
import Image from "next/image"
import Link from "next/link"
import headerStyles from '@/style/Header.module.css'
import { useState } from "react"
import ModalWindow from "../lib/ModalWindow"
import Contact from "./Contact"
import ReviewForm from "../lib/ReviewForm"

export default function Header() {
  const [openContact, setOpenContact] = useState(false);
  const [openReview, setOpenReview] = useState(false);

  return (
    <header className={headerStyles.header}>
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
          <li className={headerStyles.contactNavListItem} onClick={() => setOpenContact(!openContact)}>
            Contact
          </li>
          <li className={headerStyles.separatedNavListItem} onClick={() => setOpenReview(true)}>
            Review
          </li>
        </ul>
      </nav>

      {openContact && <Contact onClose={() => setOpenContact(false)} />}

      {openReview && (
        <ModalWindow
          onClose={() => setOpenReview(false)}
          title="What Do You Think About Us?"
        >
          <ReviewForm onClose={() => setOpenReview(false)} />
        </ModalWindow>
      )}
    </header>
  )
}