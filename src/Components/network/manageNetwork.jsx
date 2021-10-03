import axios from "axios"
import React, { useEffect, useState } from "react"
import styles from "./network.module.css"
// import { FaBeer } from 'react-icons/fa';

export const ManageNetwork = () => {
  const token = localStorage.getItem("token")

  const Header = {
    headers: {
      Authorization: "Bearer " + token,
    },
  }
  const [curr_user, setCurr_user] = useState(null)
  const curr_email = localStorage.getItem("email")
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/profile/${curr_email}`)
      .then(({ data }) => {
        setCurr_user(data.user)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  })
  return (
    <div>
      <div className={styles.manage}>
        <p>Manage my network</p>
        <div className={styles.network_div}>
          <div className={styles.manage_network}>
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
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <p>Connections</p>
            <p>{curr_user?.connections.length}</p>
          </div>
          <div className={styles.manage_network}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M16 15h-6a3.24 3.24 0 011.79-2.89L12 12h2l.21.11A3.24 3.24 0 0116 15zm-3-7a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2zm8-4v16a2 2 0 01-2 2H5v-3H3v-2h2v-4H3v-2h2V7H3V5h2V2h14a2 2 0 012 2zm-2 0H7v16h12V4z"></path>
            </svg>
            <p>Contacts</p>
            <p>128</p>
          </div>
          <div className={styles.manage_network}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M12 2h-.94a10 10 0 00-7.78 14.88L2.1 21a.72.72 0 00.69.92h.2l4.12-1.17A10 10 0 0012 22a10.32 10.32 0 001.57-.12A10 10 0 0012 2zm1.28 18a8.48 8.48 0 01-1.28.1 8.11 8.11 0 01-3-.59L11 18v-1.18a3 3 0 001 .18 3 3 0 001-.18V18l2 1.53a7.81 7.81 0 01-1.72.47zM10 11.16V9.85a2 2 0 014 0v1.3a6 6 0 01-.71 2.85l-.29.6a1 1 0 01-.88.53h-.2a1 1 0 01-.92-.53l-.29-.6a6 6 0 01-.71-2.84zm10.09 1.61a8.15 8.15 0 01-3.16 5.68L15 17v-2.17A8 8 0 0016 11v-1a4 4 0 00-8 0v1a8 8 0 001 3.86V17l-2.65 2-1.87.53.6-2.13.21-.75-.38-.65a8.12 8.12 0 016.32-12.09H12a8.13 8.13 0 018.09 8.86z"></path>
            </svg>
            <p>People I follow</p>
            <p>36</p>
          </div>
          <div className={styles.manage_network}>
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
              <path d="M15 13.25V21H9v-7.75A2.25 2.25 0 0111.25 11h1.5A2.25 2.25 0 0115 13.25zm5-.25h-1a2 2 0 00-2 2v6h5v-6a2 2 0 00-2-2zM12 3a3 3 0 103 3 3 3 0 00-3-3zm7.5 8A2.5 2.5 0 1017 8.5a2.5 2.5 0 002.5 2.5zM5 13H4a2 2 0 00-2 2v6h5v-6a2 2 0 00-2-2zm-.5-7A2.5 2.5 0 107 8.5 2.5 2.5 0 004.5 6z"></path>
            </svg>
            <p>Groups</p>
            <p>3</p>
          </div>
          <div className={styles.manage_network}>
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
              <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
            </svg>
            <p>Event</p>
            <p>1</p>
          </div>
          <div className={styles.manage_network}>
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
              <path d="M4 2v20h16V2zm14 18h-4v-2h-4v2H6V4h12zm-7-8H8v-2h3zm0 4H8v-2h3zm5-4h-3v-2h3zm-5-4H8V6h3zm5 0h-3V6h3zm0 8h-3v-2h3z"></path>
            </svg>
            <p>Pages</p>
            <p>9</p>
          </div>
          <div className={styles.manage_network}>
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
              <path d="M13 13h5v1h-5zm5-5H6v3h12zm-5 8h5v-1h-5zm9-12v13a3 3 0 01-3 3H5a3 3 0 01-3-3V4zm-2 2H4v11a1 1 0 001 1h14a1 1 0 001-1zm-9 7H6v3h5z"></path>
            </svg>
            <p>Newsletters</p>
            {/* <p>36</p> */}
          </div>
          <div className={styles.manage_network}>
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
              <path d="M21 10V8h-4.56L17 3h-2l-.56 5h-4L11 3H9l-.56 5H3v2h5.22l-.44 4H3v2h4.56L7 21h2l.56-5h4L13 21h2l.56-5H21v-2h-5.22l.44-4zm-7.22 4h-4l.44-4h4z"></path>
            </svg>
            <p>Hashtag</p>
            <p>444</p>
          </div>
        </div>
        <div>
          <img
            src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
