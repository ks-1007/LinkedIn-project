import React from 'react'
import styles from "./loader.module.css"

export default function NewsCard() {
    return (
        <div className={styles.loadingscreen}>
            <div className={styles.loadinganimation}>
                <img src="/li-logo.svg" alt="" className={styles.logo}/>
            <div className={styles.loadingbar}></div>
            </div>
        </div>
    )
}