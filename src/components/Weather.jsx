import styles from './styles/Weather.module.css'
import { WeatherCards } from './Weather/WeatherCards'
import { WeatherInfo } from './Weather/WeatherInfo'
import { WeatherForecast } from './Weather/WeatherForecast'

export const Weather = () => {
    return (
        <section className={styles.weather}>
            <div className={`${styles.container} container`}>
                <WeatherCards />
                <WeatherInfo />
                <WeatherForecast />
            </div>
        </section>
    )
}