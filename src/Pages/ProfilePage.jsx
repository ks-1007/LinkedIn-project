import { About } from "../Components/ProfilePage/About"
import { Dashboard } from "../Components/ProfilePage/Dashboard"
import { Education } from "../Components/ProfilePage/Education"
import { Footer } from "../Components/ProfilePage/Footer"
import { Hero } from "../Components/ProfilePage/Hero"
import { Interests } from "../Components/ProfilePage/Interests"
import { LinkedInAd } from "../Components/ProfilePage/LinkedInAd"
import { RightSideTop } from "../Components/ProfilePage/RightSideTop"
import { Skills } from "../Components/ProfilePage/Skills"
import styles from "../Components/ProfilePage/styles/ProfilePage.module.css"
export function ProfilePage() {
  return (
    <>
      <div className={styles.rootCont}>
        <div className={styles.leftSection}>
          <Hero />
          <Dashboard />
          <About />
          <Education />
          <Skills />
          <Interests />
        </div>
        <div className={styles.rightSection}>
          <RightSideTop />
          <LinkedInAd />
        </div>
      </div>
      <Footer />
    </>
  )
}
