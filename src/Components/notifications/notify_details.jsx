import styles from "./notify.module.css"
import axios from "axios"
import React, { useEffect, useState } from "react"
import _ from "lodash"

const Single = ({ user, body, pic }) => {
  // console.log("res:", res)

  // console.log(ele)
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
        <div>
          <p>
            <span style={{ fontWeight: "500" }}> {_.startCase(user.name)}</span>{" "}
            <span style={{ color: "grey" }}>shared a post: </span>
            {body}
          </p>
        </div>

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
  return (
    <div>
      <div className={styles.list_notify}>
        <div className={styles.notify_list}>
          {feed.map((ele) => {
            // console.log(ele);
            return <Single {...ele} />
          })}
          {/* <hr /> */}
        </div>
      </div>
    </div>
  )
}
