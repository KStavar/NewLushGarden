'use client'
import Image from "next/image"
import Link from "next/link"
import styles from '@/style/Header.module.css'
import { usePathname } from "next/navigation"
import { useState } from "react"
import Modal from "./ModalWindow"
import Contact from "./Contact"

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <header className={pathname === '/' ? styles.header : styles.headerGradient}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/Mask_group.png" width={100} height={60} alt="logo" />
        </Link>
      </div>

      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/about-us" className={styles.navLink}>About Us</Link>
          </li>
          <li className={styles.navListItem}>
            <Link href="/gallery" className={styles.navLink}>Gallery</Link>
          </li>
          <li className={styles.contactNavListItem} onClick={() => setOpenContact(!openContact)}>Contact</li>
          <li className={styles.separatedNavListItem} onClick={() => setOpen(!open)}>Details</li>
        </ul>
      </nav>

      {openContact && <Contact onClose={() => setOpenContact(false)} />}
      {open && <Modal onClose={() => setOpen(false)} />}
    </header>
  )
}
