import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Redirect, useHistory } from "react-router"
import { storeToken } from "../Redux/actions"
import styles from "./pages.module.css"
export const UserCreateForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const initState = {
    name: "",
    email: "",
    description: "",
  }
  const [user, setUser] = useState(initState)
  const handleInput = (e) => {
    const data = {
      ...user,
      [e.target.name]: e.target.value.toLowerCase(),
    }
    setUser(data)
  }
  const handleContinue = () => {
    axios
      .post("http://localhost:5000/users", user)
      .then(({ data }) => {
        // console.log("res:", res)
        console.log("token:", data.token)
        localStorage.setItem("token", data.token)
        // dispatch(storeToken(data.token))
        history.push("/profile")
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }
  return (
    <div>
      <div></div>
      <div className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onInput={handleInput}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          onInput={handleInput}
        />
        <br />
        <input
          type="text"
          name="description"
          onInput={handleInput}
          placeholder="description"
        />
        <button onClick={handleContinue}>continue</button>
      </div>
    </div>
  )
}
