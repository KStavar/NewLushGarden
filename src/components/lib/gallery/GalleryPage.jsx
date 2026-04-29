import React from 'react'
import styles from '@/style/GalleryPage.module.css'
// Импортируем наш новый компонент Блога
import Blog from './Blog' 

export default function GalleryPage() {
    return (
        <div className={styles.container}>

            <section className={styles.gallery}>
                <div className={styles.divH2About}>
                    <h2 className={styles.h2Gallery}>Gallery</h2>
                </div>
             <div className={styles['divH2Empty']}>
            </div>
                <div className={styles.divImages}>
                    <div className={styles.images}>
                        <img src="/image-f-gallery.png" alt="Main" className={styles.lImage}/>
                        <div className={styles.rightImgs}>
                            <img src="/img-f-gallery2.png" alt="Gallery 2" className={styles.image}/>
                            <img src="/img-f-gallery3.png" alt="Gallery 3" className={styles.image}/>
                            <img src="/img-f-gallery4.png" alt="Gallery 4" className={styles.image}/>
                            <img src="/img-f-gallery5.png" alt="Gallery 5" className={styles.image}/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Заголовок для блога (используем стили галереи для единообразия) */}
            <div className={styles.divH2Interesting}>
                <h2 className={styles.h2OurGallery}>Interesting blog to read</h2>
            </div>

            {/* Вставляем компонент Блога */}
            <Blog />
        </div>
    )
}