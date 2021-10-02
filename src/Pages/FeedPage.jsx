import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ProfileCard from "../Components/FeedPage/ProfileCard"
import CreatePost from "../Components/FeedPage/CreatePost"
import PostCard from "../Components/FeedPage/PostCard"
import NewsCard from "../Components/FeedPage/NewsCard"
import CoursesCard from "../Components/FeedPage/CoursesCard"
import { device } from "../Components/breakpoints"
import axios from "axios"

export default function FeedPage() {
  const [feed, setFeed] = useState([])
  const token = localStorage.getItem("token")
  // console.log("token:", token)

  const Header = {
    headers: {
      Authorization: "Bearer " + token,
    },
  }
  useEffect(() => {
    axios
      .get("http://localhost:5000/posts", Header)
      .then(({ data }) => {
        console.log("data:", data)
        setFeed(data.posts)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }, [])
  return (
    <>
      <Page>
        <Left>
          <ProfileCard />
        </Left>
        <Middle>
          <CreatePost />
          {feed.map((post) => {
            return <PostCard {...post} />
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
