import styles from './styles/WeatherInfo.module.css'
import visibility from '../../images/visibility.png'
import windSpeed from '../../images/wind-speed.png'
import pressure from '../../images/pressure.png'
import feelsLike from '../../images/feels-like.png'
import humidity from '../../images/humidity.png'

export const WeatherInfo = () => {
    return (
        <div className={styles.div}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <p className={styles.title}>Feels like</p>
                    <p className={styles.text}>29.2 ℃</p>
                    <img className={styles.image} src={feelsLike}/>
                </li>
                <li className={styles.item}>
                    <ul className={styles.maxminList}>
                        <li className={styles.maxminItem}>
                            <p className={styles.title}>Min ℃</p>
                            <p className={styles.text}>27.9℃</p>
                        </li>
                        <li className={styles.maxminItem}>
                            <p className={styles.title}>Max ℃</p>
                            <p className={styles.text}>27.9℃</p>
                        </li>
                    </ul>
                </li>
                <li className={styles.item}>
                    <p className={styles.title}>Humidity</p>
                    <p className={styles.text}>59%</p>
                    <img className={styles.image} src={humidity}/>
                </li>
                <li className={styles.item}>
                    <p className={styles.title}>Pressure</p>
                    <p className={styles.text}>1007 Pa%</p>
                    <img className={styles.image} src={pressure}/>
                </li>
                <li className={styles.item}>
                    <p className={styles.title}>Wind speed</p>
                    <p className={styles.text}>3.17 m/s</p>
                    <img className={styles.image} src={windSpeed}/>
                </li>
                <li className={styles.item}>
                    <p className={styles.title}>Visibility</p>
                    <p className={styles.text}>Unlimited</p>
                    <img className={styles.image} src={visibility}/>
                </li>
            </ul>
        </div>
    )
}