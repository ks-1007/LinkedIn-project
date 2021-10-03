import styles from "./pages.module.css"
import { Notify } from "../Components/notifications/notify"
import { DetailNotify } from "../Components/notifications/notify_details"
import { NotifyFooter } from "../Components/notifications/notify_footer"
import Navbar from "../Components/Nav/Navbar"

export const Notifications = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.nav}></div>
      <div className={styles.notification}>
        <Notify />
        <DetailNotify />
      </div>
    </div>
  )
}
