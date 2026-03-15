import Image from "next/image"
import '@/style/OfferSection.css'

const plants = [
  { img: "/Rectangle 21.png", name: "Cactus Plant", price: "8$" },
  { img: "/Rectangle 1.png", name: "Cactus Plant", price: "8$" },
  { img: "/Rectangle 6.png", name: "Cactus Plant", price: "8$" },
  { img: "/Rectangle 7.png", name: "Cactus Plant", price: "8$" },
  { img: "/Rectangle 11.png", name: "Cactus Plant", price: "8$" },
  { img: "/Rectangle 9.png", name: "Cactus Plant", price: "8$" },
  { img: "/Rectangle 2.png", name: "Cactus Plant", price: "8$" },
  { img: "/pexels-hanna-auramenka-8497490 1.png", name: "Cactus Plant", price: "8$" },
]

export default function OfferSection() {
  return (
    <section className="what-we-offer">

      <div className="div-what-we-offer">
        <h2 className="h2-what-we-offer">What We Offer To You</h2>
      </div>
      
      <div className="div-all-cactus-plants">
        {plants.map((plant, index) => (
          <div className="cactus-plant" key={index}>

            <Image className="img-cactus-plant"
              src={plant.img}
              width={250}
              height={250}
              alt={plant.name}
            />

            <div className="div-cactus-and-price">
              <div>
                <p className="p-cactus-plant">{plant.name}</p>
                <p className="p-price">{plant.price}</p>
              </div>

              <a href="#" className="a-button-cactus-plant">Buy Now</a>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}