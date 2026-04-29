import Image from "next/image"
import styles from '@/style/AboutPlants.module.css'
import plantsData from '@/data/plants.json'

export default function AboutPlants() {
  return (
    <section className={styles.aboutPlants}>

      <div className={styles.divAboutPlants}>
        <h2 className={styles.h2AboutPlants}>{plantsData.title}</h2>
        <p className={styles.pAboutPlants}>{plantsData.description}</p>
      </div>

      <div className={styles.typesOfPlants}>
        {plantsData.types.map((plant) => (
          <div key={plant.id} className={styles[plant.id]}>
            <Image src={plant.image} width={126} height={126} alt="plant" className={styles.imgTypesOfPlant} />
            <h2 className={styles[plant.classTitle]}>{plant.title}</h2>
            <p className={styles[plant.classDescription]}>{plant.description}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

