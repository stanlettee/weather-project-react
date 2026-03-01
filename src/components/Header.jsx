import styles from './styles/Header.module.css'
import logoMobile from '../images/logo-mobile-1.webp'
import logoTablet from '../images/logo-tablet-1.webp'
import logoDesktop from '../images/logo-desktop-1.webp'
import user from '../images/user.webp'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from 'react'

export const Header = ({setModal, isLoggedIn, logoutUser, currentUser, setIsLoggedIn, menuOpen, setMenuOpen}) => {
    const [scrollTarget, setScrollTarget] = useState(null);


    useEffect(() => {
        if (!scrollTarget) return;
        const section = document.getElementById(scrollTarget);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
            setScrollTarget(null); 
        }
    }, [scrollTarget]);


    const handleContactsClick = () => {
        setMenuOpen(false)
        setScrollTarget("footer")
    }

    const handleMenuClick = () => {
        setMenuOpen(false)
        setScrollTarget("menu")
    }

    const handleAboutUsClick = () => {
        setMenuOpen(false)
        setScrollTarget("about-us")
    }

    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <picture className={styles.headerImage}>
                    <source media="(min-width: 1200px)" srcSet={logoDesktop} />
                    <source media="(min-width: 768px)" srcSet={logoTablet} />
                    <img src={logoMobile} alt="Description of image" />
                </picture>
                <nav className={`${styles.navMenu} ${menuOpen ? styles.open : ""}`}>
                    <ul className={styles.headerList}>
                        <li className={styles.headerItem}>
                            <a className={styles.headerLink} href=''>Who we are</a>
                        </li>
                        <li className={styles.headerItem}>
                            <a className={styles.headerLink} onClick={handleContactsClick}>Contacts</a>
                        </li>
                        <li className={styles.headerItem}>
                            <a className={styles.headerLink} href=''>Menu</a>
                        </li>
                    </ul>
                    <div className={styles.headerDiv}>
                        <img className={styles.headerAvatar} src={user} alt="user's avatar"/>
                        {isLoggedIn && currentUser && (
                            <button className={styles.userButton} type='button' onClick={logoutUser}>{currentUser?.username}</button>
                        )} 
                        {!isLoggedIn && (
                            <button onClick={() => {setModal(true)}} type='button' className={styles.headerButton}>Sign Up</button>
                        )}
                        
                    </div>
                </nav>
                <ul className={styles.headerList}>
                    <li className={styles.headerItem}>
                        <a className={styles.headerLink} onClick={handleAboutUsClick}>Who we are</a>
                    </li>
                    <li className={styles.headerItem}>
                        <a className={styles.headerLink} onClick={handleContactsClick}>Contacts</a>
                    </li>
                    <li className={styles.headerItem}>
                        <a className={styles.headerLink} onClick={handleMenuClick}>Menu</a>
                    </li>
                </ul>
                <div className={styles.headerDiv}>
                    {isLoggedIn && currentUser && (
                        <button className={styles.userButton} type='button' onClick={logoutUser}>{currentUser?.username}</button>
                    )} 
                    {!isLoggedIn && !currentUser && (
                        <button onClick={() => {setModal(true)}} type='button' className={styles.headerButton}>Sign Up</button>
                    )}
                    <img className={styles.headerAvatar} src={user} alt="user's avatar"/>
                </div>
                <div className={styles.headerMenu}>
                    <button onClick={() => setMenuOpen(!menuOpen)} type='button' className={styles.headerMenuButton}>
                        <a className={styles.headerMenuLink}>Menu</a>
                        <MdOutlineKeyboardArrowRight className={styles.headerMenuIcon}/>
                    </button>
                </div>
            </div>
        </header>
    )
}