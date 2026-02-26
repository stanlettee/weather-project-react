import styles from './styles/Modal.module.css'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const Modal = ({modal, setModal, registerUser, loginUser}) => {
    const [logIn, setLogIn] = useState(false)

    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const username = form.username.value
        const email = form.email.value
        const password = form.password.value
        const result = registerUser(username, email, password);

        if (result.success) {
            toast.success('Registered successfully!');
            setModal(false);
        } else {
            toast.error(result.message);
        }

        form.reset();
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const result = loginUser(email, password);

        if (result.success) {
            toast.success('Logged in successfully!');
            setModal(false);
        } else {
            toast.error(result.message);
        }

        form.reset();
    }


    useEffect(() => {
        setLogIn(false)
    }, [modal])
    if (modal) {
        document.body.style.overflow = 'hidden';
        
        if (!logIn) {
            return (
                <div className={styles.backdrop} onClick={() => {setModal(false)}}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <h2 className={styles.title}>Sign up</h2>
                        <form onSubmit={handleRegisterSubmit} className={styles.form}>
                            <label htmlFor="username" className={styles.username}>Username</label> 
                            <input type="text" className={styles.usernameInput} name="username" placeholder="Username" autoComplete="username" required/>
                            <label htmlFor="username" className={styles.email}>E-Mail</label> 
                            <input type="email" className={styles.emailInput} name="email" placeholder="E-Mail" required/>
                            <label htmlFor="username" className={styles.password}>Password</label> 
                            <input type="password" className={styles.passwordInput} autoComplete="current-password" placeholder="Password" name="password" required/>
                            <button type="submit" className={styles.button}>Sign up</button>
                        </form>
                        <p className={styles.text}>Already have an account? <a onClick={() => {setLogIn(true)}} className={styles.link}>Log In</a></p>
                    </div>
                </div>
            )
        } else if (logIn) {
            return (
                <div className={styles.backdrop} onClick={() => {setModal(false)}}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <h2 className={styles.title}>Log in</h2>
                        <form onSubmit={handleLoginSubmit} className={styles.form}>
                            <label htmlFor="email" className={styles.email}>E-Mail</label> 
                            <input type="email" className={styles.emailInput} name="email" placeholder="E-Mail" required/>
                            <label htmlFor="password" className={styles.password}>Password</label> 
                            <input type="password" className={styles.passwordInput} autoComplete="current-password" placeholder="Password" name="password" required/>
                            <button type="submit" className={styles.button}>Log in</button>
                        </form>
                        <p className={styles.text}>Don't have an account? <a onClick={() => {setLogIn(false)}} className={styles.link}>Sign Up</a></p>
                    </div>
                </div>
            )
        }

    } else {
        document.body.style.overflow = 'auto';
    }
}