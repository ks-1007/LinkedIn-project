import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ProfileCard from "../Components/FeedPage/ProfileCard"
import CreatePost from "../Components/FeedPage/CreatePost"
import PostCard from "../Components/FeedPage/PostCard"
import NewsCard from "../Components/FeedPage/NewsCard"
import CoursesCard from "../Components/FeedPage/CoursesCard"
import { device } from "../Components/breakpoints"
import axios from "axios"
import Recent from "../Components/FeedPage/recent"
import Navbar from "../Components/Nav/Navbar"
import Loader from "../Components/loader/Loader"

export default function FeedPage() {
  const [feed, setFeed] = useState([])
  const curr_email = localStorage.getItem("email")
  const [curr_user, setCurr_user] = useState(null)
  const [updatePosts, setUpdatePosts] = useState(false)

  const handleUpdatePost = () => {
    setUpdatePosts(!updatePosts)
  }
  // console.log("token:", token)
  const token = localStorage.getItem("token")

  const Header = {
    headers: {
      Authorization: "Bearer " + token,
    },
  }
  useEffect(() => {
    axios
      .get("https://linkedin-server.herokuapp.com/posts", Header)
      .then(({ data }) => {
        console.log("data:", data)
        setFeed(data.posts.reverse())
      })
      .catch((err) => {
        console.log("err:", err)
      })
    axios
      .get(`https://linkedin-server.herokuapp.com/users/profile/${curr_email}`)
      .then(({ data }) => {
        setCurr_user(data.user)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }, [updatePosts])
  return !curr_user ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <Page>
        <Left>
          <ProfileCard {...curr_user} />
          <Recent />
        </Left>
        <Middle>
          <CreatePost user={curr_user} handleUpdatePost={handleUpdatePost} />
          {feed.map((post) => {
            console.log("post:", post)

            return <PostCard post={post} curr_user={curr_user} />
          })}
        </Middle>
        <Right>
          <NewsCard />
          <CoursesCard />
        </Right>
      </Page>
    </>
  )
}

//---------styled-components-----------

const Page = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-top: 6.5rem;
  max-width: 1256px;
  /* @media ${device.desktop} {
        max-width: 1256px;
    }
    @media ${device.laptopL} {
        max-width: 11560px;
    } */
`
const Left = styled.div``
const Middle = styled.div``
const Right = styled.div``
