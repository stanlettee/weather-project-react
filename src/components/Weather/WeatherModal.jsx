import styles from './styles/WeatherModal.module.css'
import axios from "axios";
import { useState, useEffect } from "react";

export const WeatherModal = () => {
    const [forecast, setForecast] = useState({})
    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/forecast", {
            params: {
                q: data.name,
                units: "metric",
                appid: "7d999ffaaae7e56a4ec93496de93f111"
            }
        })
        .then(res => {
            console.log(res.data);
            setForecast(res.data)
        });
    }, [])

    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Hourly forecast</h2>
                <ul className={styles.list}>
                    {forecast.list.slice(0, 8).map((item, index) => {
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
        </div>
    )
}