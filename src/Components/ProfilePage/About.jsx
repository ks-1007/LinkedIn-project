import axios from "axios"
import { useState } from "react"
import { BiPencil } from "react-icons/bi"
import Modal from "react-responsive-modal"
import styled from "styled-components"
import styles from "./styles/ProfilePage.module.css"
export function About({ user, handleRerender }) {
  const token = localStorage.getItem("token")

  const Header = {
    headers: {
      Authorization: "Bearer " + token,
    },
  }
  const [openAboutModal, setOpenAboutModal] = useState(false)
  const onCloseAboutModal = () => setOpenAboutModal(false)
  const onOpenAboutModal = () => setOpenAboutModal(true)
  const [about, setAbout] = useState("")
  const updateAboutInfo = () => {
    axios
      .patch("http://localhost:5000/users", { about }, Header)
      .then((res) => {
        console.log("res:", res)
        handleRerender()
        onCloseAboutModal()
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }
  return (
    <>
      <Modal open={openAboutModal} onClose={onCloseAboutModal} center>
        <h2>Edit about</h2>
        <div className={styles.editAboutCont}>
          <p>Description</p>
          <textarea
            type="text"
            name="name"
            id=""
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        <Btn onClick={updateAboutInfo}>Save Changes</Btn>
      </Modal>
      <div className={styles.aboutCont}>
        <BiPencil className={styles.editPencil} onClick={onOpenAboutModal} />
        <p>About</p>
        <p>{user.about}</p>
      </div>
    </>
  )
}
const Btn = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  border: none;
  height: 50px;
  text-align: center;
  line-height: 50px;
  /* &:first-child { */
  background-color: #0a66c2;
  border-radius: 2rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  a {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
  }
  /* } */
`
