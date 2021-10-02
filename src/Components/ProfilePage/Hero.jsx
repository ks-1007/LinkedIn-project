import { useSelector } from "react-redux"
import styles from "./styles/ProfilePage.module.css"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import { useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { BiPencil } from "react-icons/bi"
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
export function Hero(user) {
  const token = localStorage.getItem("token")

  const Header = {
    headers: {
      Authorization: "Bearer " + token,
    },
  }
  const [openProfile, setOpenProfile] = useState(false)
  const [openBg, setOpenBg] = useState(false)
  const [heroInfoModal, setHeroInfoModal] = useState(false)
  const [input, setInput] = useState({})
  const [profilePic, setProfilePic] = useState("")
  const [coverPic, setCoverPic] = useState("")
  const onCloseHeroInfo = () => {
    setInput({})
    setHeroInfoModal(false)
  }
  const openHeroInfoModal = () => {
    setHeroInfoModal(true)
  }
  const handleInput = (e) => {
    const newInput = {
      ...input,
      [e.target.name]: e.target.value.toLowerCase(),
    }
    setInput(newInput)
    console.log(newInput)
  }

  const onOpenProfileModal = () => setOpenProfile(true)
  const onCloseProfileModal = () => {
    setOpenProfile(false)
  }

  const onOpenBgModal = () => setOpenBg(true)
  const onClosBgModal = () => {
    setOpenBg(false)
  }

  const handleUploadeProfilePic = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "cloudimages")

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dsze0r5xt/image/upload",
      data
    )

    setProfilePic(res.data.url)
  }
  const uploadProfilePicToServer = () => {
    const picBody = {
      profile_pic: profilePic,
    }
    axios
      .patch("http://localhost:5000/users/profile-pic", picBody, Header)
      .then((res) => {
        setProfilePic("")
        onCloseProfileModal()
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }
  const handleUploadCoverPic = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "cloudimages")

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dsze0r5xt/image/upload",
      data
    )

    setCoverPic(res.data.url)
  }

  const uploadCoverPicToServer = () => {
    const picBody = {
      background_pic: coverPic,
    }
    console.log("picBody:", picBody)

    axios
      .patch("http://localhost:5000/users/background-pic", picBody, Header)
      .then((res) => {
        setCoverPic("")
        onClosBgModal()
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }

  const updateHeroInfo = () => {
    axios
      .patch("http://localhost:5000/users", input, Header)
      .then((res) => {
        console.log("res:", res)
        onCloseHeroInfo()
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }

  return (
    <>
      <Modal open={heroInfoModal} onClose={onCloseHeroInfo} center>
        <h2>Change details</h2>
        <div className={styles.editHeroCont}>
          <p>Name</p>
          <input type="text" name="name" id="" onChange={handleInput} />

          <p>Heading</p>
          <input type="text" name="description" id="" onChange={handleInput} />

          <p>Location</p>
          <input type="text" name="location" id="" onChange={handleInput} />
        </div>

        <Btn onClick={updateHeroInfo}>Save Changes</Btn>
      </Modal>
      <Modal open={openProfile} onClose={onCloseProfileModal} center>
        <h2>Change profile pic</h2>
        <input
          type="file"
          name="profile_pic"
          id=""
          onChange={handleUploadeProfilePic}
        />

        <Btn onClick={uploadProfilePicToServer}>upload</Btn>
      </Modal>
      <Modal open={openBg} onClose={onClosBgModal} center>
        <h2>Change cover pic</h2>
        <input
          type="file"
          name="background_pic"
          id=""
          onChange={handleUploadCoverPic}
        />

        <Btn onClick={uploadCoverPicToServer}>upload</Btn>
      </Modal>
      <div className={styles.heroCont}>
        <div className={styles.bgImageCont} onClick={onOpenBgModal}>
          <img
            src={
              user.background_pic ||
              "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
            }
            alt=""
            srcset=""
          />
        </div>
        <div className={styles.profileImageCont} onClick={onOpenProfileModal}>
          <img
            src={
              user.profile_pic ||
              "https://komarketing.com/images/2014/08/linkedin-default.png"
            }
            alt=""
            srcset=""
          />
        </div>
        <div className={styles.infoCont}>
          <div>
            <h3>{user.name.toUpperCase()}</h3>
            <p>{user.description.toUpperCase()}</p>
            <p style={{ color: "rgb(102,102,102)" }}>
              {user.location.toUpperCase()} <span>Contact info</span>{" "}
            </p>
            <p>
              {" "}
              <span>{user.connections.length} connections</span>{" "}
            </p>
            <div className={styles.btnDiv}>
              <button className={styles.openToBtn}>Open to</button>
              <button>Add section</button>
              <button>More</button>
            </div>
          </div>

          <div className={styles.infoRight}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1640822400&v=beta&t=ddXeOiLdTF1sRaL2VUhtjhp4XmzPg8n_VzDEHlNDmLU"
              alt=""
              srcset=""
            />
            <p>Masai School</p>
          </div>
          <BiPencil className={styles.editPencil} onClick={openHeroInfoModal} />
        </div>
      </div>
    </>
  )
}
