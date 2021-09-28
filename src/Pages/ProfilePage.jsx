import { Hero } from "../Components/ProfilePage/Hero"
import styles from "../Components/ProfilePage/styles/ProfilePage.module.css"
export function ProfilePage() {
  return (
    <div className={styles.rootCont}>
      <div className={styles.leftSection}>
        <Hero />
      </div>
      <div className={styles.rightSection}></div>
    </div>
  )
}
