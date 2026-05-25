import React from 'react'
import styles from '@/style/GalleryPage.module.css'
import Blog from './Blog'
import galleryData from '@/data/gallery.json'

export default function GalleryPage() {
    const { mainImage, subImages } = galleryData;

    return (
        <div className={styles.container}>
            <section className={styles.gallery}>
                <div className={styles.divH2About}>
                    <h2 className={styles.h2Gallery}>Gallery</h2>
                </div>

                <div className={styles['divH2Empty']}></div>

                <div className={styles.divImages}>
                    <div className={styles.images}>

                        <img
                            src={mainImage.src}
                            alt={mainImage.alt}
                            className={styles.lImage}
                        />

                        <div className={styles.rightImgs}>

                            {subImages.map((img) => (
                                <img
                                    key={img.id}
                                    src={img.src}
                                    alt={img.alt}
                                    className={styles.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.divH2Interesting}>
                <h2 className={styles.h2OurGallery}>Interesting blog to read</h2>
            </div>

            <Blog />
        </div>
    )
}