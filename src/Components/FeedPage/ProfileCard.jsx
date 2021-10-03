import _ from "lodash"
import React from "react"
import styled from "styled-components"

export default function ProfileCard(user) {
  return (
    <CardCont>
      <Hero>
        <Cover>
          {/*
            <img
              src={
                user?.background_pic ||
                "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              }
              alt=""
            />*/}
        </Cover>
        <ProfilePhoto>
          <img
            src={
              user.profile_pic ||
              "https://komarketing.com/images/2014/08/linkedin-default.png"
            }
            alt=""
          />
        </ProfilePhoto>
        <Username>
          <h3>{_.startCase(user.name)}</h3>
        </Username>
        <About>
          <p>{_.startCase(user.description)}</p>
        </About>
      </Hero>
      <Count>
        <Para>
          <Title>Who viewed your profile</Title>
          <Num>101</Num>
        </Para>
        <Para>
          <Title>Views of your post</Title>
          <Num>556</Num>
        </Para>
      </Count>
      <Premium></Premium>
      <MyItem>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="#666666"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
          </svg>
        </Icon>
        <IconName>My items</IconName>
      </MyItem>
    </CardCont>
  )
}

//---------styled-components--------------------------------

const CardCont = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: #7e7e7e;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  max-width: 255px;
  margin-bottom: 1.2rem;
  background-color: #fff;
`
const Hero = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  text-align: center;
  position: relative;
`
const Cover = styled.div`
  background-color: #808080;
  padding: 0px;
  height: 60px;
  img {
    height: 100%;
  }
`
const ProfilePhoto = styled.div`
  height: 80px;
  z-index: 100;
  margin-top: -30px;
  margin-left: 0px;
  margin-bottom: 40px;
  //position: absolute;
  img {
    height: 100%;
    border-radius: 50%;
  }
`
const Username = styled.div`
  h3 {
    margin: 0;
    color: #1a1a1a;
    font-weight: 500;
  }
`
const About = styled.div`
  margin-top: 4px;
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`
const Count = styled.div`
  margin: 12px 0;
  padding: 4px 12px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 0.9rem;
  //border-top: 1px solid rgba(0,0,0,.15);
`
const Para = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.div`
  display: flex;
`
const Num = styled.div`
  color: #3e49da;
`
const Premium = styled.div``
const MyItem = styled.div`
  display: flex;
  padding: 4px 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
`
const Icon = styled.div``
const IconName = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  padding-left: 10px;
  line-height: 1rem;
`
