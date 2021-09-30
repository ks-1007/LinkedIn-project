import styles from "./styles/ProfilePage.module.css"
import { HiQuestionMarkCircle } from "react-icons/hi"
export function RightSideTop() {
  return (
    <div className={styles.rightTopCont}>
      <div>
        <p>Edit public profile & URL</p>
        <HiQuestionMarkCircle />
      </div>
      <div>
        <p>Add profile in another language</p>
        <HiQuestionMarkCircle />
      </div>
    </div>
  )
}
