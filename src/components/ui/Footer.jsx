import Image from "next/image"
import Link from "next/link"
import styles from '@/style/Footer.module.css'
import footerData from '@/data/footer.json'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divFooter}>

        <div className={styles.divFooterContacts}>
          {footerData.contacts}
        </div>

        <div className={styles.divFooterIcons}>
          {footerData.socials.map((social, index) => (
            <Link key={index} href={social.href} className={styles.footerIcon}>
              <Image src={social.icon} width={30} height={30} alt={social.alt} />
            </Link>
          ))}
        </div>

        <ul className={styles.ulFooter}>
          {footerData.links.map((link, index) => (
            <li key={index} className={styles.divFooterLi}>
              {link.href ? (
                <Link href={link.href} className={styles.aUlFooter}>{link.label}</Link>
              ) : (
                link.label
              )}
            </li>
          ))}
        </ul>

        <div className={styles.copyright}>
          {footerData.copyright}
        </div>

      </div>
    </footer>
  )
}
