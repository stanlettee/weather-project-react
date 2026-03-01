import styles from './styles/WeatherLiked.module.css'
import { FcLike } from "react-icons/fc";
import { useRef } from "react";

export const WeatherLiked = ({likedCities, setLikedCities, weatherInfo}) => {
    console.log(likedCities)
    const deleteCity = (indexToDelete) => {
        setLikedCities(prev =>
            prev.filter((_, index) => index !== indexToDelete)
        );
    }
    if (likedCities.length === 0) {
        return null
    } else {
        return (
            <div className={styles.div}>
                <h2 className={styles.title}>Liked Cities</h2>
                <ul className={styles.list}>
                    {likedCities.map((item, index) => {
                        return <li className={styles.item} key={index}>
                            <h2 className={styles.name}>{item.name}</h2>
                            <button onClick={() => {weatherInfo(item.name)}} className={styles.button}>See more</button>
                            <button onClick={() => {deleteCity(index)}} className={styles.likeButton}>
                                <FcLike className={styles.likeIcon} />
                            </button>
                        </li>
                    })}
                </ul>
            </div>
    )
    }

}