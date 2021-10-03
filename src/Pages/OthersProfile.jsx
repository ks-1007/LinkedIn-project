import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import styled from "styled-components"
import { About } from "../Components/OthersProfilePage/About"
import { Dashboard } from "../Components/OthersProfilePage/Dashboard"
import { Education } from "../Components/OthersProfilePage/Education"
import { Footer } from "../Components/OthersProfilePage/Footer"
import { Hero } from "../Components/OthersProfilePage/Hero"
import { Interests } from "../Components/OthersProfilePage/Interests"
import { LinkedInAd } from "../Components/OthersProfilePage/LinkedInAd"
import { RightSideTop } from "../Components/OthersProfilePage/RightSideTop"
import { Skills } from "../Components/OthersProfilePage/Skills"
import styles from "../Components/OthersProfilePage/styles/ProfilePage.module.css"
import { storeUser } from "../Redux/actions"

export function OthersProfilePage() {
  const [user, setUser] = useState(null)
  const { email } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/profile/${email}`)
      .then(({ data }) => {
        console.log("data:", data)

        setUser(data.user)
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
          <Hero user={user} />
          <Dashboard />
          <About user={user} />
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
