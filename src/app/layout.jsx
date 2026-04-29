import Header from "../components/ui/Header"
import Footer from "../components/ui/Footer"
import '@/style/globals.css'

export const metadata = {
  title: "Lush Garden",
  description: "Nature's Beauty Delivered to You",
  icons: {
    icon: "/favicon.ico",          
    shortcut: "/favicon.ico",      
    apple: "/apple-touch-icon.png" 
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
