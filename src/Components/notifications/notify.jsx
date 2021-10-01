
import styles from './notify.module.css'


export const Notify = () => {
    return (
        <div>
            <div className={styles.notify}>
                <h4>Notifications</h4>
                <p>You’re all caught up! Check<br/> back later for new<br/> notifications</p>
                <div>
                    <p>Improve your notifications</p>
                    <h4>View settings</h4>
               </div>
            </div>
        </div>
    )
}