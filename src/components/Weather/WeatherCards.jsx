import styles from './styles/WeatherCards.module.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoReload } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import sun from '../../images/sun.png'
import { useState, useEffect } from 'react';
import humidity from '../../images/humidity.png'
import heavyRain from '../../images/heavyRain.png'
import fewClouds from '../../images/fewClouds.png'
import lightRain from '../../images/lightRain.png'
import overcastClouds from '../../images/overcastClouds.png'
import scatteredClouds from '../../images/scattered-clouds.png'
import mist from '../../images/mist.png'
import snow from '../../images/snow.png'
import thunder from '../../images/thunder.png'

export const WeatherCards = ({location, data}) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [date, setDate] = useState(new Date())
    const [dayNumber] = useState(date.getDay())
    const [dayName, setDayName] = useState(days[dayNumber])
    // const [icon, setIcon] = useState(data.weather[0].icon);
    // const [iconUrl, setIconUrl] = useState(`https://openweathermap.org/img/wn/${icon}.png`);
    const [image, setImage] = useState(() => {
    if (!data) return null;
    
    switch (data.weather[0].main) {
        case 'Rain':
            return heavyRain;   
        case 'Clear':
            return sun 
        case 'Clouds':
            return scatteredClouds
        case 'Drizzle':
            return lightRain
        case 'Thunderstorm':
            return thunder
        case 'Snow':
            return snow 
        case 'Atmosphere':
            return mist
    }
    });
    useEffect(() => {
        setDate(new Date())
        setDayName(days[dayNumber]);
        if (!data) return;
            switch (data.weather[0].main) {
                case 'Rain':
                    setImage(heavyRain);
                    break
                case 'Clear':
                    setImage(sun)  
                    break
                case 'Clouds':
                    setImage(scatteredClouds)
                    break
                case 'Drizzle':
                    setImage(lightRain)
                    break
                case 'Thunderstorm':
                    setImage(thunder)
                    break
                case 'Snow':
                    setImage(snow)
                    break
                case 'Atmosphere':
                    setImage(mist)
                    break
            }

        console.log(data.weather[0].main)
    }, [location, data]) 
    
    return (
        <div className={styles.weatherDiv}>
                    <ul className={styles.weatherList}>
                        <li className={styles.weatherItem}>
                            <div className={styles.weatherCityNameDiv}>
                                <p className={styles.weatherCityName}>{data.name}</p>
                                <p className={styles.weatherCountryName}>{new Intl.DisplayNames(['en'], { type: 'region' }).of(data.sys.country)}</p>
                            </div>
                            <p className={styles.weatherTime}>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            <div className={styles.weatherButtonDiv}>
                                <button className={styles.weatherButton}>Hourly forecast</button>
                                <button className={styles.weatherButton}>Weekly forecast</button>
                            </div>
                            <div className={styles.weatherDateDiv}>
                                <p className={styles.weatherDate}>{date.toLocaleDateString()}</p>
                                <div className={styles.weatherLineDiv}></div>
                                <p className={styles.weatherDay}>{dayName}</p>
                            </div>
                            <div className={styles.cityWeatherDiv}>
                                <img className={styles.weatherImage} src={image}/>
                                <p className={styles.weatherDegrees}>{Math.round(data.main.temp)}℃</p>
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
                                <p className={styles.weatherCityName}>{data.name}</p>
                                <p className={styles.weatherCountryName}>{new Intl.DisplayNames(['en'], { type: 'region' }).of(data.sys.country)}</p>
                            </div>
                            <p className={styles.weatherTime}>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            <div className={styles.weatherButtonDiv}>
                                <button className={styles.weatherButton}>Hourly forecast</button>
                                <button className={styles.weatherButton}>Weekly forecast</button>
                            </div>
                            <div className={styles.weatherDateDiv}>
                                <p className={styles.weatherDate}>{date.toLocaleDateString()}</p>
                                <div className={styles.weatherLineDiv}></div>
                                <p className={styles.weatherDay}>{dayName}</p>
                            </div>
                            <div className={styles.cityWeatherDiv}>
                                <img className={styles.weatherImage} src={image}/>
                                <p className={styles.weatherDegrees}>{Math.round(data.main.temp)}℃</p>
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
                                <p className={styles.weatherCityName}>{data.name}</p>
                                <p className={styles.weatherCountryName}>{new Intl.DisplayNames(['en'], { type: 'region' }).of(data.sys.country)}</p>
                            </div>
                            <p className={styles.weatherTime}>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            <div className={styles.weatherButtonDiv}>
                                <button className={styles.weatherButton}>Hourly forecast</button>
                                <button className={styles.weatherButton}>Weekly forecast</button>
                            </div>
                            <div className={styles.weatherDateDiv}>
                                <p className={styles.weatherDate}>{date.toLocaleDateString()}</p>
                                <div className={styles.weatherLineDiv}></div>
                                <p className={styles.weatherDay}>{dayName}</p>
                            </div>
                            <div className={styles.cityWeatherDiv}>
                                <img className={styles.weatherImage} src={image}/>
                                <p className={styles.weatherDegrees}>{Math.round(data.main.temp)}℃</p>
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
    )
}