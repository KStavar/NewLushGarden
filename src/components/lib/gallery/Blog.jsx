import React from 'react'
import styles from '@/style/Blog.module.css'
import posts from '@/data/blogData.json' 

export default function Blog() {
    return (
        <div className={styles.blog}>
            {posts.map((post) => (
                <div key={post.id} className={styles.divCards}>
                    <img className={styles.imgCards} src={post.image} alt={post.title} />
                    <div className={styles.divContent}>
                        <div className={styles.divCardHeader}>
                            <h3 className={styles.h3CardHeader}>{post.title}</h3>
                        </div>
                        <p className={styles.pInfo}>{post.desc}</p>
                        <div className={styles.readMore}>
                            <p>{post.date}</p>
                            <p className={styles.pReadMore}>
                                <a href="#">Read more...</a>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}