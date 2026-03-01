import styles from './styles/Hero.module.css'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useState, useEffect } from 'react';

export const Hero = ({setLocation, setIsUserLocation}) => {
    const [name, setName] = useState('')
    const [today, setToday] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault()
        setLocation(name)
        setIsUserLocation(true)
        const section = document.getElementById("weather-cards");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const formatDateWithOrdinal = (date) => {
        const months = [
            "January","February","March","April","May","June",
            "July","August","September","October","November","December"
        ];
        const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        const day = date.getDate();
        let ordinal = "th";
        if (day % 10 === 1 && day !== 11) ordinal = "st";
        else if (day % 10 === 2 && day !== 12) ordinal = "nd";
        else if (day % 10 === 3 && day !== 13) ordinal = "rd";

        const monthYear = `${months[date.getMonth()]} ${date.getFullYear()}`;
        const weekdayDay = `${weekdays[date.getDay()]}, ${day}${ordinal}`;

        return { monthYear, weekdayDay };
    };

    const { monthYear, weekdayDay } = formatDateWithOrdinal(today);

    useEffect(() => {
        const now = new Date();
        const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const msUntilMidnight = nextMidnight - now;

        const timeout = setTimeout(() => {
            setToday(new Date());
            setInterval(() => setToday(new Date()), 24 * 60 * 60 * 1000);
        }, msUntilMidnight);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={`${styles.container} container`}>
                <h1 className={styles.heroTitle}>Weather dashboard</h1>
                <div className={styles.heroDiv}>
                    <p className={styles.heroText}>Create your personal list of favorite cities and always be aware of the weather.</p>
                    <div className={styles.heroLine}></div>
                    <p className={styles.heroDate}>{monthYear}<br/>
                        {weekdayDay}</p>
                </div>
                <form onSubmit={handleSubmit} className={styles.heroForm}>
                    <input onChange={handleChange} value={name} className={styles.heroInput} placeholder="Search location..." />
                    <button type="submit" className={styles.heroButton}>
                        <HiOutlineMagnifyingGlass className={styles.heroIcon}/>
                    </button>
                </form>
            </div>
        </section>
    )
}