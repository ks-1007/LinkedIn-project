import styles from "./notify.module.css"
import axios from "axios";
import React, { useEffect, useState } from "react"
import _ from "lodash";
import { format } from 'timeago.js';
import styled from "styled-components"
import { Link } from "react-router-dom"
import Loader from "../loader/Loader"
import {NotifyFooter} from "./notify_footer"


const Single = ({ user, body, pic, createdAt }) => {
  // console.log("res:", res)

  console.log('ggggggggggggggggggggggggggggggggg',createdAt)
  return (
    <>
      <div className={styles.single_notify}>
        <div>
          {" "}
          <img
            src={
              user.profile_pic ||
              "https://komarketing.com/images/2014/08/linkedin-default.png"
            }
            alt=""
            style={{ borderRadius: "50%" }}
          />{" "}
        </div>
    <Details>
        <div>
          <p>
            <span style={{ fontWeight: "500" }}> {_.startCase(user.name)}</span>{" "}
            <span style={{ color: "grey" }}>shared a post: </span>
            {body}
          </p>
        </div>
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

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
          </svg>
        </div>
      </div>
      <hr />
    </>
  )
}

export const DetailNotify = () => {
  const [feed, setFeed] = useState([])
  const token = localStorage.getItem("token")

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
        setFeed(data.posts.reverse())
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }, [])
  return !feed.length ? <Loader /> : (
    <>
    <div>
      <div className={styles.list_notify}>
        <div className={styles.notify_list}>
          {feed.map((ele) => {
            // console.log(ele);
            return (
              <Link to={`/othersprofile/${ele.user.email}`}>
                {" "}
                <Single {...ele} />
              </Link>
            )
          })}
          {/* <hr /> */}
        </div>
      </div>
      </div>
        <NotifyFooter />
      </>
  )
}


//---------styled-components-----------

const Details = styled.div`
  display: flex;
  flex-direction: column;
  `
const Time = styled.div`
  display: flex;
  p {
    margin: 0;
    font-size: 0.85rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
      svg{
      padding-top: 0.2rem;;
    }
`