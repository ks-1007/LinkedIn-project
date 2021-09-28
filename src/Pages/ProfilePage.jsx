import { About } from "../Components/ProfilePage/About"
import { Education } from "../Components/ProfilePage/Education"
import { Hero } from "../Components/ProfilePage/Hero"
import { Skills } from "../Components/ProfilePage/Skills"
import styles from "../Components/ProfilePage/styles/ProfilePage.module.css"
export function ProfilePage() {
  return (
    <div className={styles.rootCont}>
      <div className={styles.leftSection}>
        <Hero />
        <About />
        <Education />
        <Skills />
      </div>
      <div className={styles.rightSection}></div>
    </div>
  )
}
