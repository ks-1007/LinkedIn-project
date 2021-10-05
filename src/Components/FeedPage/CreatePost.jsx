import axios from "axios"
import React, { useState } from "react"
import styled from "styled-components"
import { Modal } from "react-responsive-modal"
import styles from "../ProfilePage/styles/ProfilePage.module.css"
//import {device} from '../breakpoints'

export default function CreatePost({ user, handleUpdatePost }) {
  const [postPic, setPostPic] = useState("")
  const [postText, setPostText] = useState("")
  const handlePosting = () => {
    const token = localStorage.getItem("token")
    const postBody = {
      body: postText,
      pic: postPic,
    }
    console.log("postBody:", postBody)

    const Header = {
      headers: {
        Authorization: "Bearer " + token,
      },
    }

    axios
      .post(`http://localhost:5000/posts`, postBody, Header)
      .then((res) => {
        console.log("res:", res)
        handleUpdatePost()

        onClosePostModal()
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }

  const [openPostModal, setOpenPostModal] = useState(false)
  const onClosePostModal = () => setOpenPostModal(false)
  const onOpenPostModal = () => setOpenPostModal(true)
  const handleUploadePostPic = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "cloudimages")

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dsze0r5xt/image/upload",
      data
    )

    setPostPic(res.data.url)
  }
  return (
    <>
      <Modal open={openPostModal} onClose={onClosePostModal} center>
        <div className={styles.postModal}>
          <h2>Create a post</h2>
          <p>Upload an image</p>
          <input type="file" name="pic" id="" onChange={handleUploadePostPic} />
          <p>Write a post</p>
          <textarea
            type="text"
            name="body"
            id=""
            onChange={(e) => setPostText(e.target.value)}
          />
          <Btn onClick={handlePosting}>upload</Btn>
        </div>
      </Modal>
      <CardCont>
        <Top>
          <Image>
            <img
              src={
                user.profile_pic ||
                "https://komarketing.com/images/2014/08/linkedin-default.png"
              }
              alt="Profile"
            />
          </Image>
          <StartCont>
            <Start onClick={onOpenPostModal}>
              {/* <input
              type="text"
              name=""
              id=""
              onChange={(e) => setPost(e.target.value)}
            /> */}
            </Start>
          </StartCont>
        </Top>
        <ButtonsCont>
          {/* <button onClick={handlePosting}>post</button> */}
          <Button>
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#70b5f9"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
            </Icon>
            <IconName>Photo</IconName>
          </Button>
          <Button>
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#7fc15e"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
              </svg>
            </Icon>
            <IconName>Video</IconName>
          </Button>
          <Button>
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="#eaad54"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"
                  class=""
                ></path>
              </svg>
            </Icon>
            <IconName>Event</IconName>
          </Button>
          <Button>
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="pink"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
            </Icon>
            <IconName>Write article</IconName>
          </Button>
        </ButtonsCont>
        <Hashtags>
          <HashtagsPara>
            Start a conversation, #ConversationsForChange
          </HashtagsPara>
        </Hashtags>
      </CardCont>
    </>
  )
}

//----------styled-components----------

const CardCont = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: #7e7e7e;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  margin-bottom: 1.4rem;
  background-color: #fff;
  min-width: 640px;
`
const Top = styled.div`
  margin: 8px 16px 0;
  display: flex;
`
const Image = styled.div`
  margin-right: 8px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
  }
`
const StartCont = styled.div`
  flex-grow: 1;
  margin: 4px 0;
`
const Start = styled.div`
  border: 1px solid #cfcfcf;
  min-height: 48px;
  border-radius: 35px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  :hover {
    background-color: #e0e0e0;
  }
`
const Para = styled.div`
  padding: 10px 8px 10px 16px;
  line-height: 1.5rem;
`
const ButtonsCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 4px;
  font-size: 1rem;
  font-weight: 500;
  min-height: 3rem;
`
const Button = styled.div`
  display: flex;
  padding: 0 8px;
  cursor: pointer;
  border-radius: 0.2rem;
  :hover {
    transition: ease-in-out 0.2s;
    background-color: #e7e7e7;
  }
`
const Icon = styled.div`
  vertical-align: middle;
  margin-top: 0.8rem;
`
const IconName = styled.div`
  margin-left: 0.5rem;
  line-height: 3rem;
`
const Hashtags = styled.div``
const HashtagsPara = styled.div`
  margin: 0 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 10px 0;
`
const Btn = styled.div`
  margin: 1rem auto 2rem auto;
  width: 200px;

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

  /* }*/
`
