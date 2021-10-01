import styles from './pages.module.css'
import { Notify } from '../Components/notifications/notify'
import { DetailNotify } from '../Components/notifications/notify_details'


export const Notifications = () => {
    return (
        <div>
            <div className={styles.nav}></div>
            <div className={styles.notification}>
                <Notify />
                <DetailNotify/>
            </div>
        </div>
    )
}