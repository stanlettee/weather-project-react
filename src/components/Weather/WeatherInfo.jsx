import styles from './styles/WeatherInfo.module.css'
import visibility from '../../images/eye.png'
import windSpeed from '../../images/wind.png'
import pressure from '../../images/pressure-gauge.png'
import feelsLike from '../../images/temperature.png'
import humidity from '../../images/humidity.png'

export const WeatherInfo = ({data}) => {
    return (
        <div className={styles.div}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <p className={styles.title}>Feels like</p>
                    <p className={styles.text}>{Math.round(data.main.feels_like)}℃</p>
                    <img className={styles.image} src={feelsLike}/>
                </li>
                <li className={styles.item}>
                    <ul className={styles.maxminList}>
                        <li className={styles.maxminItem}>
                            <p className={styles.title}>Min ℃</p>
                            <p className={styles.text}>{data.main.temp_min}℃</p>
                        </li>
                        <li className={styles.maxminItem}>
                            <p className={styles.title}>Max ℃</p>
                            <p className={styles.text}>{data.main.temp_max}℃</p>
                        </li>
                    </ul>
                </li>
                <li className={styles.item}>
                    <p className={styles.title}>Humidity</p>
                    <p className={styles.text}>{data.main.humidity}%</p>
                    <img className={styles.image} src={humidity}/>
                </li>
                <li className={styles.item}>
                    <p className={styles.title}>Pressure</p>
                    <p className={styles.text}>{data.main.pressure} Pa</p>
                    <img className={styles.image} src={pressure}/>
                </li>
                <li className={styles.item}>
                    <p className={styles.title}>Wind speed</p>
                    <p className={styles.text}>{data.wind.speed} m/s</p>
                    <img className={styles.image} src={windSpeed}/>
                </li>
                <li className={styles.item}>
                    <p className={styles.title}>Visibility</p>
                    <p className={styles.text}>{data.visibility}</p>
                    <img className={styles.image} src={visibility}/>
                </li>
            </ul>
        </div>
    )
}