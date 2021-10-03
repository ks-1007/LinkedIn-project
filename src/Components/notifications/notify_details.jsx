import styles from "./notify.module.css"
import axios from "axios"
import React, { useEffect, useState } from "react"
const notify_arr = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1640822400&v=beta&t=ddXeOiLdTF1sRaL2VUhtjhp4XmzPg8n_VzDEHlNDmLU",
    des: "Masai School shared a post: Masai tribe is now 20k strong on Discord! If you are not a part already,join us on our discord server and get all the insider info on coding, workshops",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C5103AQG_90kKOlYgeA/profile-displayphoto-shrink_100_100/0/1555267885323?e=1638403200&v=beta&t=XLivdZaZ1Ds9ttOUVWGODbdkP4EWhlDA5jcmCPfijs0",
    des: 'Prateek Shukla shared a post: Freshworks is the first Indian SaaS company to get listed on Nasdaq. More than 500 employees have become "crorepatis" This is ~12% of the..',
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4D0BAQEx8fTz8QFKvw/company-logo_100_100/0/1615318650285?e=1641427200&v=beta&t=j7gKudN4E5dY-jqpoP2-fRntwmLWsNIXofk3iCqoZbo",
    des: "Google Developers, a company you just followed, shared a post you may be interested in: 💧 Meet Flow, the app that helps users easily find clean water sources nearby using",
  },
  // {
  //     url: "https://media-exp1.licdn.com/dms/image/C5607AQFRvVKNI2fUew/group-logo_image-shrink_72x72/0/1631008970600?e=1633197600&v=beta&t=uB93NP9qfrjPGCQvAYITgCTQVsvjMg_8Y1gYlI6Z19o",
  //     des:"You're in: Welcome to Front End Developer Group"
  // },
  // {
  //     url: "https://media-exp1.licdn.com/dms/image/C4D07AQHX-GY93J88ug/group-logo_image-shrink_92x92/0/1525123465678?e=1633197600&v=beta&t=4_tcdcLpdxiv2gyZkYH1WmZgcBSnBUz39yqNi_cCXko",
  //     des:"You're in: Welcome to React Developers - ReactJS & React Native Professional Development Mastermind"
  // },
  // {
  //     url: "https://media-exp1.licdn.com/dms/image/C4D07AQFK5LmvZWWTGg/group-logo_image-shrink_72x72/0/1630999696851?e=1633197600&v=beta&t=x32ffjS36dINgKRjPwnZA1sDpSQF9mLZx-nhb1jNNjE",
  //     des:"You're in: Welcome to JavaScript"
  // },
  {
    url: "https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1640822400&v=beta&t=ddXeOiLdTF1sRaL2VUhtjhp4XmzPg8n_VzDEHlNDmLU",
    des: "As someone rightly said, “Your best teacher is your last mistake”. Happy Teacher’s Day, everyone! Keep making mistakes and learn from it.",
  },
  {
    url: "https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1641427200&v=beta&t=KfPeHKGz-oeqnO4vPY4Zw4quI2hYv6NKkSYkTztmKD0",
    des: "Google shared a post: We're only one week away from this year's Grace Hopper Celebration of women in computing! Hope to see you there! #vGHC #vGHC21 #BuildForEveryone",
  },
]

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
            <span style={{ fontWeight: "500" }}>
              {" "}
              {user.name.toUpperCase()}
            </span>{" "}
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
