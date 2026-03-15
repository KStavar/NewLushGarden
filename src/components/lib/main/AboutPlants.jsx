import Image from "next/image"
import '@/style/AboutPlants.css'
export default function AboutPlants() {
  return (
    <section className="about-plants">

      <div className="div-about-plants">
        <h2 className="h2-about-plants">
          We Help Choose The Most Suitable Plants For You
        </h2>

        <p className="p-about-plants">
          Our selection includes a wide variety of flowers, from classic roses to exotic orchids,
          as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements.
        </p>
      </div>

      <div className="types-of-plants">

        <div className="indoor-plants">
          <Image src="/Indoor_Plant.svg" width={126} height={126} alt="plant" />
          <h2 className="h2-plants">Indoor Plants</h2>
          <p className="p-plants">Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants.</p>
        </div>

        <div className="outdoor-plants">
          <Image src="/Outdoor_Plant.svg" width={126} height={126} alt="plant" />
          <h2  className="h2-outdoor-plants">Outdoor Plants</h2>
          <p className="p-outdoor-plants">Bring a touch of greenery to your living spaces with our collection of indoor plants.</p>
        </div>

        <div className="plants-pots">
          <Image src="/Bamboo 257.svg" width={126} height={126} alt="plant" />
          <h2  className="h2-plants">Plants Pots</h2>
          <p className="p-plants">Add a touch of style to your indoor or outdoor spaces with our collection of pots plants.</p>
        </div>

      </div>

    </section>
  )
}