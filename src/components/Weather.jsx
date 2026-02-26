import styles from './styles/Weather.module.css'
import { WeatherCards } from './Weather/WeatherCards'
import { WeatherInfo } from './Weather/WeatherInfo'
import { WeatherForecast } from './Weather/WeatherDaylyForecast'
import { WeatherHourlyForecast } from './Weather/WeatherHourlyForecast'

import { useState, useEffect } from 'react';
import axios from 'axios';

export const Weather = ({location, isUserLocation}) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [userClick, setUserClick] = useState(false)
    const reload = () => {
        if (!location) return;
        setError(false);
        setLoading(true)

        axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7d999ffaaae7e56a4ec93496de93f111`
        )
        .then(res => {
            console.log(res.data)
            setData(res.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err); 
            setError(true)
            setLoading(false)
    });
    }
    useEffect(() => {
        reload()
    }, [location]); 

    useEffect(() => {
        if (!userClick) return;

        let targetId = '';
        if(userClick === "hourly") targetId = "hourly-forecast";
        if(userClick === "daily") targetId = "dayly-forecast";
        if(userClick === "weather") targetId = "weather-info";

        const timeout = setTimeout(() => {
            const section = document.getElementById(targetId);
            if(section){
                section.scrollIntoView({behavior: "smooth", block: "center"});
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [userClick]);

    if (error) {
        return (
            <div className={styles.errorWrapper}>
                <div className={styles.errorIcon}>⚠️</div>
                <h2 className={styles.errorTitle}>City not found</h2>
                <p className={styles.errorText}>
                    We couldn't find "{location}".  
                    Please check the spelling and try again.
                </p>
            </div>
        );
    }

    if (loading) {
        return <div className={styles.loaderWrapper}>
            <div className={styles.loader}></div>
            <p className={styles.loaderText}>Loading weather...</p>
        </div>
    }

    if (!data) return null  

    return (
            <section className={styles.weather}>
                <div className={`${styles.container} container`}>
                    <WeatherCards setUserClick={setUserClick} location={location} data={data} reload={reload}/>
                    {(isUserLocation || userClick) && (
                    <>
                        <WeatherInfo data={data} />
                        <WeatherHourlyForecast data={data} />
                        <WeatherForecast data={data} />
                    </>
                    )}
                </div>
            </section>
    )

}