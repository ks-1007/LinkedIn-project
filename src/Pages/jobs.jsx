import { Options } from '../Components/jobs/options'
import styles from './pages.module.css'

export const Jobs = () => {
    return (
        <div>
            <div className={styles.nav}></div>
            <div className={styles.jobs}>
                <Options/>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
    )
}