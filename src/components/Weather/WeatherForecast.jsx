import styles from './styles/WeatherForecast.module.css'
import lightRain from '../../images/lightRain.png'
import clear from '../../images/sun.png'
import scattered from '../../images/scattered-clouds.png'
import few from '../../images/fewClouds.png'
import overcast from '../../images/overcastClouds.png'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const WeatherForecast = ({data}) => {
    const [forecast, setForecast] = useState([])
    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/forecast", {
            params: {
                q: data.name,
                units: "metric",
                appid: "7d999ffaaae7e56a4ec93496de93f111"
            }
        })
        .then(res => {
            console.log(res.data.daily); 
            const daily = res.data.list.filter(item =>
                item.dt_txt.includes("12:00:00")
            );
            console.log(daily);
            setForecast(daily);
        });
    }, [])
    if (forecast == []) {
        return;
    }
    return (
        <div id='forecast' className={styles.div}>
            <h2 className={styles.title}>5-day forecast</h2>
            <ul className={styles.list}>
                {forecast.slice(0, 5).map((item, index) => {
                    const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
                    return <li key={index} className={styles.item}>
                        <p className={styles.day}> {new Date(item.dt_txt.replace(" ", "T"))
                            .toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric"
                            })}</p>
                        <div className={styles.weatherDiv}>
                            <img className={styles.weatherImage} src={iconUrl}/>
                            <p className={styles.weatherDegrees}>{Math.round(item.main.temp_max)}/{Math.round(item.main.temp_min)}℃</p>
                        </div>
                        <p className={styles.weatherName}>{item.weather[0].description}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}