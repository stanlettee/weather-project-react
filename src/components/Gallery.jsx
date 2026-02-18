import styles from './styles/Gallery.module.css'
import image1 from '../images/slider-image3.webp'
import image2 from '../images/slider-image2.webp'
import image3 from '../images/slider-image1.webp'
import image4 from '../images/slider-image4.webp'
import image5 from '../images/slider-image5.webp'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Gallery = () => {
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const changePage = () => {
        setPage(page + 1)
    }
    useEffect(() => {
        axios.get("https://pixabay.com/api/", {
            params: {
                key: "50860863-3fd2c2b6f6ec06a8734a828e4",
                q: "nature",
                per_page: 5,
                page: page
            }
            })
        .then(response => {
            setImages(response.data.hits)
            console.log(response.data.hits)
        })
        .catch(error => {
            console.error(error);
        });
    }, [])

        useEffect(() => {
        axios.get("https://pixabay.com/api/", {
            params: {
                key: "50860863-3fd2c2b6f6ec06a8734a828e4",
                q: "nature",
                per_page: 5,
                page: page
            }
            })
        .then(response => {
            setImages(response.data.hits)
            console.log(response.data.hits)
        })
        .catch(error => {
            console.error(error);
        });
    }, [page])

    return (
        <section className={styles.gallery}>
            <div className={`${styles.container} container`}>
                <h3 className={styles.title}>Beautiful nature</h3>
                <ul className={styles.list}>
                    {images.map((item, index) => {
                        console.log(index)
                        return <li key={index} className={styles.item}>
                            <img src={item.largeImageURL} className={styles[`image${index + 1}`]}/>
                        </li>
                    })}
                </ul>
                <button onClick={changePage} type='button' className={styles.button}>New images</button>
            </div>
        </section>
    )
}