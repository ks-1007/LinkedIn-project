import React, { useEffect, useState } from "react"
import _ from "lodash"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { format } from "timeago.js"
import CommentCard from "./CommentCard"
import axios from "axios"

export default function PostCard({ post, curr_user }) {
  let { user, body, pic, createdAt, _id } = post
  const token = localStorage.getItem("token")

  const Header = {
    headers: {
      Authorization: "Bearer " + token,
    },
  }
  const [showComments, setShowComments] = useState(false)
  const [likes, setLikes] = useState([])
  const [liked, setLiked] = useState(false)
  const [likedUserName, setLikedUserName] = useState([])
  const [comments, setComments] = useState([])
  const [commentInput, setCommentInput] = useState("")
  const [rerender, setRerender] = useState(false)
  useEffect(() => {
    axios
      .get(`https://linkedin-server.herokuapp.com/likes/${_id}`, Header)
      .then(({ data }) => {
        let likesdata = [...data.likes]

        likesdata = likesdata.map((item) => {
          return item.user._id
        })
        let likerName = [...data.likes]
        likerName = likerName.map((item) => {
          return item.user.name === data.curr_user_name ? null : item.user.name
        })

        setLikedUserName(likerName)
        setLikes([...likesdata])

        if (likesdata.includes(data.curr_userId)) {
          setLiked(true)
        }
      })
      .catch((err) => {
        console.log("err:", err)
      })

    // getting comments
    axios
      .get(`https://linkedin-server.herokuapp.com/comments/${_id}`)
      .then(({ data }) => {
        setComments(data.comments)
        // setShowComments(!showComments)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }, [liked, showComments, rerender])

  const handleLike = () => {
    // if not liked send like request to backend
    if (!liked) {
      console.log("liked")
      axios
        .post(
          `https://linkedin-server.herokuapp.com/likes`,
          { post: _id },
          Header
        )
        .then(({ data }) => {
          setLiked(!liked)
        })
    } else {
      // if liked then send request to delete like
      console.log("disliked")
      axios
        .patch(
          "https://linkedin-server.herokuapp.com/likes",
          { post: _id },
          Header
        )
        .then(({ data }) => {
          setLiked(!liked)
        })
    }
  }

  const handleCommentInput = (e) => {
    if (e.keyCode === 13) {
      const body = {
        post: _id,
        body: commentInput,
      }
      axios
        .post("https://linkedin-server.herokuapp.com/comments", body, Header)
        .then(({ data }) => {
          // getComment()
          // setShowComments(!showComments)
          setRerender(!rerender)
          e.target.value = ""
        })
    } else {
      setCommentInput(e.target.value)
    }
  }
  return (
    <CardCont>
      <Link to={`/othersprofile/${user.email}`}>
        <ProfileCont>
          <UserImg>
            <img
              src={
                user.profile_pic ||
                "https://komarketing.com/images/2014/08/linkedin-default.png"
              }
              alt="profile"
            />
          </UserImg>
          <Details>
            <UserName>
              <h3>{_.startCase(user.name)}</h3>
            </UserName>
            <Tagline>
              <p>{_.startCase(user.description)}</p>
            </Tagline>
            <Time>
              <p>{format(createdAt)}</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="#00000099"
                  class="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                </svg>
              </span>
            </Time>
          </Details>
          <More>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#00000099"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
            </svg>
          </More>
        </ProfileCont>
      </Link>
      <CaptionCont>
        <p>{body}</p>
      </CaptionCont>
      {pic && (
        <ImgCont>
          <img src={pic} alt="" />
        </ImgCont>
      )}

      <LikesCont>
        <Icons>
          <img src="like.svg" alt="" /> <img src="celebrate.svg" alt="" />{" "}
          <img src="love.svg" alt="" />
        </Icons>
        <Count>{likes.length + "."}</Count>
        {likedUserName.length > 0 ? (
          <div style={{ display: "flex", color: "grey", fontSize: "13px" }}>
            <p>Liked by {liked ? "You " : ""} </p>

            {likedUserName.map((user) => {
              return user && <p>{", " + _.startCase(user) + " "}</p>
            })}
            <p>... and others</p>
          </div>
        ) : (
          ""
        )}
      </LikesCont>
      <ButtonCont>
        <LikeButton onClick={handleLike}>
          {liked ? (
            <img
              class="reactions-icon artdeco-button__icon reactions-react-button__icon reactions-icon__creation--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light"
              src="https://static-exp1.licdn.com/sc/h/5zhd32fqi5pxwzsz78iui643e"
              alt="LIKE"
              data-test-reactions-icon-type="LIKE"
              data-test-reactions-icon-theme="light"
              style={{ marginRight: "5px" }}
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#00000099"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
            </svg>
          )}

          <span>Like</span>
        </LikeButton>
        <Button onClick={() => setShowComments(!showComments)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#00000099"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
          </svg>{" "}
          <span>Comment</span>
        </Button>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#00000099"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
          </svg>{" "}
          <span>Share</span>
        </Button>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#00000099"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
          </svg>{" "}
          <span>Send</span>
        </Button>
      </ButtonCont>
      {showComments ? (
        <CommentCont>
          <Type>
            <Img>
              <img
                src={
                  curr_user.profile_pic ||
                  "https://komarketing.com/images/2014/08/linkedin-default.png"
                }
                alt="profile"
              />
            </Img>
            <TypeCont>
              <Inp>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  // value={commentInput}
                  onKeyUp={handleCommentInput}
                />
              </Inp>
              <Emoji>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="#00000099"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
                </svg>
              </Emoji>
              <Emoji>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="#00000099"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                </svg>
              </Emoji>
            </TypeCont>
          </Type>
          <Sort>
            <p>
              Most relevant
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  class="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                </svg>
              </span>{" "}
            </p>
          </Sort>
          {comments.map((comment) => {
            return <CommentCard {...comment} />
          })}
        </CommentCont>
      ) : (
        <></>
      )}
    </CardCont>
  )
}

//--------------styled-components-------------

const CardCont = styled.div`
  margin: 0;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: #000000e6;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  margin-bottom: 1.2rem;
  background-color: #fff;
  width: 640px;
`
const ProfileCont = styled.div`
  display: flex;
  position: relative;
`
const UserImg = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  padding-right: 1rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
`
const UserName = styled.div`
  cursor: pointer;
  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }
`
const Tagline = styled.div`
  p {
    margin: 0;
    font-size: 0.85rem;
  }
`
const Time = styled.div`
  display: flex;
  p {
    margin: 0;
    font-size: 0.85rem;
    padding-right: 0.3rem;
  }
`
const More = styled.div`
  right: 0;
  position: absolute;
  cursor: pointer;
`
const CaptionCont = styled.div`
  margin: 20px 0;
  p {
    color: black;
  }
`
const ImgCont = styled.div`
  width: 100%;
  /* height: 540px; */
  margin: auto;
  /* border: 1px solid #b3b3b3; */
  text-align: center;
  img {
    width: 615px;
  }
`
const LikesCont = styled.div`
  display: flex;
  padding: 0.7rem 0;
  cursor: pointer;
  align-items: center;
`
const Icons = styled.div``
const Count = styled.div`
  font-size: 0.8rem;
  margin: 0 5px;
`
const ButtonCont = styled.div`
  border-top: 1px solid #cccccc;
  padding: 0.45rem 0;
  display: flex;
  justify-content: space-evenly;
`
const Button = styled.div`
  display: flex;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: #e3e5e9;
  }
  svg {
    //padding-top: 0.1rem;
    padding-right: 0.4rem;
  }
  span {
    font-size: 1rem;
  }
`
const LikeButton = styled.div`
  display: flex;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: #e3e5e9;
  }
  svg {
    //padding-top: 0.1rem;
    padding-right: 0.4rem;
  }
  span {
    font-size: 1rem;
  }
`
const CommentCont = styled.div`
  display: flex;
  flex-direction: column;
`
const Type = styled.div`
  display: flex;
  padding: 4px 0.5rem 8px;
  justify-content: space-around;
`
const Img = styled.div`
  width: 48px;
  height: 48px;
  overflow: hidden;
  padding-right: 0.3rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`
const TypeCont = styled.div`
  border: 1px solid #cfcfcf;
  border-radius: 5rem;
  flex-grow: 1;
  display: flex;
`
const Inp = styled.div`
  padding: 0.4rem;
  flex-grow: 1;
  input {
    display: flex;
    height: 100%;
    text-indent: 0.5rem;
    font-size: 1rem;
    width: 100%;
    outline: none;
    border: none;
  }
  input::placeholder {
    font-size: 1rem;
  }
`
const Emoji = styled.div`
  padding: 0.6rem 0.5rem 0 0.5rem;
`
const Sort = styled.div`
  p {
    padding-top: 0.5rem;
    padding-left: 0.8rem;
    font-size: 1rem;
    font-weight: 500;
  }
`
