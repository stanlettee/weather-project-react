import styles from './styles/Weather.module.css'
import sun from '../images/sun.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoReload } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

export const Weather = () => {
    return (
        <section className={styles.weather}>
            <div className={`${styles.container} container`}>
                <div className={styles.weatherDiv}>
                    <ul className={styles.weatherList}>
                        <li className={styles.weatherItem}>
                            <div className={styles.weatherCityNameDiv}>
                                <p className={styles.weatherCityName}>Prague</p>
                                <p className={styles.weatherCountryName}>Czech Republic</p>
                            </div>
                            <p className={styles.weatherTime}>14:00</p>
                            <div className={styles.weatherButtonDiv}>
                                <button className={styles.weatherButton}>Hourly forecast</button>
                                <button className={styles.weatherButton}>Weekly forecast</button>
                            </div>
                            <div className={styles.weatherDateDiv}>
                                <p className={styles.weatherDate}>13.10.2023</p>
                                <div className={styles.weatherLineDiv}></div>
                                <p className={styles.weatherDay}>Friday</p>
                            </div>
                            <div className={styles.cityWeatherDiv}>
                                <img className={styles.weatherImage} src={sun}/>
                                <p className={styles.weatherDegrees}>22℃</p>
                            </div>
                            <div className={styles.weatherInfoDiv}>
                                <button type='button' className={styles.reloadButton}> 
                                    <IoReload className={styles.reloadIcon}/>
                                </button>
                                <button type='button' className={styles.likeButton}>
                                    <IoMdHeartEmpty className={styles.likeIcon}/>
                                </button>
                                <button type='button' className={styles.seeMoreButton}>
                                    See more
                                </button>
                                <button type='button' className={styles.deleteButton}>
                                    <RiDeleteBin6Line className={styles.deleteIcon}/>
                                </button>
                            </div>
                        </li>
                        <li id={styles.item2} className={styles.weatherItem}>
                            <div className={styles.weatherCityNameDiv}>
                                <p className={styles.weatherCityName}>Prague</p>
                                <p className={styles.weatherCountryName}>Czech Republic</p>
                            </div>
                            <p className={styles.weatherTime}>14:00</p>
                            <div className={styles.weatherButtonDiv}>
                                <button className={styles.weatherButton}>Hourly forecast</button>
                                <button className={styles.weatherButton}>Weekly forecast</button>
                            </div>
                            <div className={styles.weatherDateDiv}>
                                <p className={styles.weatherDate}>13.10.2023</p>
                                <div className={styles.weatherLineDiv}></div>
                                <p className={styles.weatherDay}>Friday</p>
                            </div>
                            <div className={styles.cityWeatherDiv}>
                                <img className={styles.weatherImage} src={sun}/>
                                <p className={styles.weatherDegrees}>22℃</p>
                            </div>
                            <div className={styles.weatherInfoDiv}>
                                <button type='button' className={styles.reloadButton}> 
                                    <IoReload className={styles.reloadIcon}/>
                                </button>
                                <button type='button' className={styles.likeButton}>
                                    <IoMdHeartEmpty className={styles.likeIcon}/>
                                </button>
                                <button type='button' className={styles.seeMoreButton}>
                                    See more
                                </button>
                                <button type='button' className={styles.deleteButton}>
                                    <RiDeleteBin6Line className={styles.deleteIcon}/>
                                </button>
                            </div>
                        </li>
                        <li id={styles.item3} className={styles.weatherItem}>
                            <div className={styles.weatherCityNameDiv}>
                                <p className={styles.weatherCityName}>Prague</p>
                                <p className={styles.weatherCountryName}>Czech Republic</p>
                            </div>
                            <p className={styles.weatherTime}>14:00</p>
                            <div className={styles.weatherButtonDiv}>
                                <button className={styles.weatherButton}>Hourly forecast</button>
                                <button className={styles.weatherButton}>Weekly forecast</button>
                            </div>
                            <div className={styles.weatherDateDiv}>
                                <p className={styles.weatherDate}>13.10.2023</p>
                                <div className={styles.weatherLineDiv}></div>
                                <p className={styles.weatherDay}>Friday</p>
                            </div>
                            <div className={styles.cityWeatherDiv}>
                                <img className={styles.weatherImage} src={sun}/>
                                <p className={styles.weatherDegrees}>22℃</p>
                            </div>
                            <div className={styles.weatherInfoDiv}>
                                <button type='button' className={styles.reloadButton}> 
                                    <IoReload className={styles.reloadIcon}/>
                                </button>
                                <button type='button' className={styles.likeButton}>
                                    <IoMdHeartEmpty className={styles.likeIcon}/>
                                </button>
                                <button type='button' className={styles.seeMoreButton}>
                                    See more
                                </button>
                                <button type='button' className={styles.deleteButton}>
                                    <RiDeleteBin6Line className={styles.deleteIcon}/>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}