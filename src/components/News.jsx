import styles from './styles/News.module.css'
import pet1 from '../images/pet-image1.webp'
import pet2 from '../images/pet-image2.webp'
import pet3 from '../images/pet-image3.webp'
import pet4 from '../images/pet-image4.webp'
import axios from 'axios'
import { useState, useEffect } from 'react'


export const News = () => {

    const [news, setNews] = useState([])
    const [seeMore, setSeeMore] = useState(4)
    const newsTitles = ['everything?q=tesla', 'everything?q=apple&from=2026-02-13&to=2026-02-13&sortBy=popularity', 'top-headlines?country=us&category=business', 'top-headlines?sources=techcrunch', 'everything?domains=wsj.com']
    const [newsTitle] = useState(newsTitles[Math.floor(Math.random() * newsTitles.length)])
    const [title] = useState(() => {
        switch (newsTitle) {
        case 'everything?q=tesla':
            return 'Tesla News';
        case 'everything?q=apple&from=2026-02-13&to=2026-02-13&sortBy=popularity':
            return 'Apple News';
        case 'top-headlines?country=us&category=business':
            return 'American Business News';
        case 'top-headlines?sources=techcrunch':
            return 'TechCrunch News';
        case 'everything?domains=wsj.com':
            return 'WallStreet Journal News';
        default:
            return 'Top Headlines';
        }
    });
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/${newsTitle}&pageSize=${seeMore}&apiKey=1d894e4d7aa44086833128373c1f31b7`)
        .then(response => {
            setNews(response.data.articles)
        })
        .catch(error => {
            console.error(error);
        });
    }, [])


    useEffect(() => {
        axios.get(`https://newsapi.org/v2/${newsTitle}&pageSize=${seeMore}&apiKey=1d894e4d7aa44086833128373c1f31b7`)
        .then(response => {
            setNews(response.data.articles)
        })
        .catch(error => {
            console.error(error);
        });
    }, [seeMore, newsTitle])



    return (
        <section className={styles.news}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.title}>{title}</h2>
                <ul className={styles.list}>
                    {news.map((item, index) => {
                        return <li key={index}>
                            <img className={styles.image} src={item.urlToImage}/>
                            <p className={styles.text}>{item.title}</p>
                        </li>
                    })}
                </ul>
                <button onClick={() => {setSeeMore(seeMore + 4)}} className={styles.button} type='button'>See more</button>
            </div>
        </section>
    )
}