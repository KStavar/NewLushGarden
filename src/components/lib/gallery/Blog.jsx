import React from 'react'
import styles from '@/style/Blog.module.css'

// Функция для получения данных (можно вынести в отдельный файл api.js)
async function getPosts() {
    const res = await fetch('http://localhost:1337/api/posts?populate=*', {
        cache: 'no-store' // Чтобы данные всегда были свежими
    });
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
}

export default async function Blog() {
    const { data: posts } = await getPosts();
    const STRAPI_URL = 'http://localhost:1337';

    return (
        <div className={styles.blog}>
            {posts.map((post) => {
                // Извлекаем текст из структуры Rich Text (Description)
                const descriptionText = post.Description?.[0]?.children?.[0]?.text || '';
                
                // Формируем полный путь к картинке
                const imageUrl = post.Image?.url 
                    ? `${STRAPI_URL}${post.Image.url}` 
                    : '/placeholder.png';

                return (
                    <div key={post.id} className={styles.divCards}>
                        <img 
                            className={styles.imgCards} 
                            src={imageUrl} 
                            alt={post.Title} 
                        />
                        <div className={styles.divContent}>
                            <div className={styles.divCardHeader}>
                                <h3 className={styles.h3CardHeader}>{post.Title}</h3>
                            </div>
                            
                            <p className={styles.pInfo}>{descriptionText}</p>
                            
                            <div className={styles.readMore}>
                                <p>{post.Date}</p>
                                <p className={styles.pReadMore}>
                                    <a href="#">Read more...</a>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}