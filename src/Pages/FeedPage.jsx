import React from "react"
import styled from "styled-components"
import ProfileCard from "../Components/FeedPage/ProfileCard"
import CreatePost from "../Components/FeedPage/CreatePost"
import PostCard from "../Components/FeedPage/PostCard"
import NewsCard from "../Components/FeedPage/NewsCard"
import CoursesCard from "../Components/FeedPage/CoursesCard"
import { device } from "../Components/breakpoints"

export default function FeedPage() {
  return (
    <>
      <Page>
        <Left>
          <ProfileCard />
        </Left>
        <Middle>
          <CreatePost />
          <PostCard />
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
