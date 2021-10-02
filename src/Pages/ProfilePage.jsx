import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
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
import { storeUser } from "../Redux/actions"
export function ProfilePage() {
  const [user, setUser] = useState(null)
  const { email } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/profile/${email}`)
      .then(({ data }) => {
        console.log("data:", data)

        localStorage.setItem("token", data.token)
        localStorage.setItem("email", data.user.email)
        setUser(data.user)
        dispatch(storeUser(data.user))
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }, [])
  return !user ? (
    <h1>...loading</h1>
  ) : (
    <>
      <div className={styles.rootCont}>
        <div className={styles.leftSection}>
          <Hero {...user} />
          <Dashboard {...user} />
          <About {...user} />
          <Education {...user} />
          <Skills {...user} />
          <Interests {...user} />
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
