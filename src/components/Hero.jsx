import styles from './styles/Hero.module.css'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`${styles.container} container`}>
                <h1 className={styles.heroTitle}>Weather dashboard</h1>
                <div className={styles.heroDiv}>
                    <p className={styles.heroText}>Create your personal list of favorite cities and always be aware of the weather.</p>
                    <div className={styles.heroLine}></div>
                    <p className={styles.heroDate}>October 2023 Friday, 13th</p>
                </div>
                <form className={styles.heroForm}>
                    <input className={styles.heroInput} placeholder="Search location..." />
                    <button type="button" className={styles.heroButton}>
                        <HiOutlineMagnifyingGlass className={styles.heroIcon}/>
                    </button>
                </form>
            </div>
        </section>
    )
}