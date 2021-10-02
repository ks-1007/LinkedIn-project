import { useSelector } from "react-redux"
import styles from "./styles/ProfilePage.module.css"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import { useState } from "react"
import axios from "axios"
import FileBase64 from "react-file-base64"
import imageToBase64 from "image-to-base64/browser"
export function Hero(user) {
  const token = localStorage.getItem("token")
  // console.log("token:", token)

  const Header = {
    headers: {
      Authorization: "Bearer " + token,
    },
  }
  const [openProfile, setOpenProfile] = useState(false)

  const onOpenProfileModal = () => setOpenProfile(true)
  const onCloseProfileModal = () => {
    // console.log(profilePic)
    setOpenProfile(false)
  }
  const [openBg, setOpenBg] = useState(false)

  const onOpenBgModal = () => setOpenBg(true)
  const onClosBgModal = () => {
    // console.log(profilePic)
    setOpenBg(false)
  }

  const [profilePic, setProfilePic] = useState("")
  const [coverPic, setCoverPic] = useState("")

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
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }

  return (
    <>
      <Modal open={openProfile} onClose={onCloseProfileModal} center>
        <h2>Change profile pic</h2>
        <input
          type="file"
          name="profile_pic"
          id=""
          onChange={handleUploadeProfilePic}
        />

        <button onClick={uploadProfilePicToServer}>upload</button>
      </Modal>
      <Modal open={openBg} onClose={onClosBgModal} center>
        <h2>Change cover pic</h2>
        <input
          type="file"
          name="background_pic"
          id=""
          onChange={handleUploadCoverPic}
        />

        <button onClick={uploadCoverPicToServer}>upload</button>
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
            <h2>{user.name}</h2>
            <p>{user.description}</p>
            <p style={{ color: "rgb(102,102,102)" }}>
              Ghaziabad, Uttar Pradesh, India . <span>Contact info</span>{" "}
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
        </div>
      </div>
    </>
  )
}
