import styles from './styles/WeatherForecast.module.css'
import lightRain from '../../images/lightRain.png'
import clear from '../../images/sun.png'
import scattered from '../../images/scattered-clouds.png'
import few from '../../images/fewClouds.png'
import overcast from '../../images/overcastClouds.png'
import { useState, useEvent } from 'react'

export const WeatherForecast = ({data}) => {
    const [icon, setIcon] = useState(data.weather[0].icon);
    const [iconUrl, setIconUrl] = useState(`https://openweathermap.org/img/wn/${icon}.png`);
    return (
        <div className={styles.div}>
            <h2 className={styles.title}>8-day forecast</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <p className={styles.day}>Fri, Oct 13</p>
                    <div className={styles.weatherDiv}>
                        <img className={styles.weatherImage} src={lightRain}/>
                        <p className={styles.weatherDegrees}>23/14℃</p>
                    </div>
                    <p className={styles.weatherName}>light rain</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.day}>Sat, Oct 14</p>
                    <div className={styles.weatherDiv}>
                        <img className={styles.weatherImage} src={lightRain}/>
                        <p className={styles.weatherDegrees}>22/10℃</p>
                    </div>
                    <p className={styles.weatherName}>light rain</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.day}>Sun, Oct 15</p>
                    <div className={styles.weatherDiv}>
                        <img className={styles.weatherImage} src={lightRain}/>
                        <p className={styles.weatherDegrees}>13/6℃</p>
                    </div>
                    <p className={styles.weatherName}>light rain</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.day}>Mon, Oct 16</p>
                    <div className={styles.weatherDiv}>
                        <img className={styles.weatherImage} src={few}/>
                        <p className={styles.weatherDegrees}>12/4℃</p>
                    </div>
                    <p className={styles.weatherName}>few clouds</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.day}>Tue, Oct 17</p>
                    <div className={styles.weatherDiv}>
                        <img className={styles.weatherImage} src={overcast}/>
                        <p className={styles.weatherDegrees}>12/4℃</p>
                    </div>
                    <p className={styles.weatherName}>overcast clouds</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.day}>Wed, Oct 18</p>
                    <div className={styles.weatherDiv}>
                        <img className={styles.weatherImage} src={clear}/>
                        <p className={styles.weatherDegrees}>13/3℃</p>
                    </div>
                    <p className={styles.weatherName}>clear sky</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.day}>Thu, Oct 19</p>
                    <div className={styles.weatherDiv}>
                        <img className={styles.weatherImage} src={overcast}/>
                        <p className={styles.weatherDegrees}>12/5℃</p>
                    </div>
                    <p className={styles.weatherName}>overcast clouds</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.day}>Fri, Oct 20</p>
                    <div className={styles.weatherDiv}>
                        <img className={styles.weatherImage} src={scattered}/>
                        <p className={styles.weatherDegrees}>9/3℃</p>
                    </div>
                    <p className={styles.weatherName}>scattered clouds</p>
                </li>
            </ul>
        </div>
    )
}