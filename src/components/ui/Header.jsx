'use client'
import Image from "next/image"
import Link from "next/link"
import '@/style/Header.css'
import { usePathname } from "next/navigation"
import { useState } from "react"
import Modal from "./ModalWindow"
import Contact from "./Contact"
export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false);

  return (
    <header className={(pathname == '/') ? "header" : 'header-gradient'}>
      <div className="logo">
        <Link href="/">
          <Image src="/Mask_group.png" width={100} height={60} alt="logo" />
        </Link>
      </div>

      <nav>
        <ul className="nav-list">
          <li className="nav-list-item"><Link href="/" className="a-nav-list-item">Home</Link></li>
          <li className="nav-list-item"><Link href="/about-us" className="a-nav-list-item">About Us</Link></li>
          <li className="nav-list-item"><Link href="/gallery" className="a-nav-list-item">Gallery</Link></li>
          <li className="contact-nav-list-item" onClick={() => setOpen(!open)}>Contact</li>
          <li className="separated-a-nav-list-item" onClick={() => setOpen(!open)}>Details</li>

        </ul>
      </nav>
      {open && <Contact onClose={() => setOpen(false)}/>}
      {open && <Modal onClose={() => setOpen(false)}/>}
    </header>
  )
}