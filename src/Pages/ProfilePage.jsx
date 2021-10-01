import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
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
  const [user, setUser] = useState({})
  const { email } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/profile/${email}`)
      .then(({ data }) => {
        console.log("data:", data)
        setUser(data.user)
        localStorage.setItem("token", data.token)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }, [])
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
