import axios from "axios"
import _ from "lodash"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from "./network.module.css"
import Loader from "../loader/Loader"

const token = localStorage.getItem("token")
// console.log("token:", token)

const Header = {
  headers: {
    Authorization: "Bearer " + token,
  },
}

const Request = ({ name, description, _id, profile_pic, background_pic }) => {
  const [accepted, setAccepted] = useState(false)
  const handleAccept = () => {
    axios
      .patch(`http://localhost:5000/users/invite/${_id}`, {}, Header)
      .then((res) => {
        setAccepted(true)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }
  return (
    <div className={styles.inv_div}>
      <div>
        <img
          src={
            profile_pic ||
            "https://komarketing.com/images/2014/08/linkedin-default.png"
          }
          alt=""
        />
      </div>
      <div>
        <h4>{_.startCase(name)}</h4>
        <p>{_.startCase(description)}</p>
      </div>
      {/* <button style={{ display: accepted ? "hidden" : "block" }}>Ignore</button> */}
      <button onClick={handleAccept} disabled={accepted}>
        {" "}
        {accepted ? "Accepted" : "Accept"}
      </button>
    </div>
  )
}
const Suggest = ({
  name,
  description,
  _id,
  profile_pic,
  background_pic,
  connections,
}) => {
  const [disableConnect, setDisableConnect] = useState(false)
  const handleConnect = () => {
    axios
      .patch(`http://localhost:5000/users/request/${_id}`, {}, Header)
      .then((res) => {
        console.log("res:", res)
        setDisableConnect(true)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }

  return (
    <div className={styles.suggest}>
      <div>
        <img
          src={
            background_pic ||
            "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
          }
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <img
          src={
            profile_pic ||
            "https://komarketing.com/images/2014/08/linkedin-default.png"
          }
          alt=""
        />
      </div>
      <h4>{_.startCase(name)}</h4>
      <p>{_.startCase(description)}</p>
      <p>{connections.length} followers</p>
      {/* <button onClick={handleConnect} disabled={disableConnect}>
        {" "}
        {disableConnect ? "Invitation sent" : "Connect"}
      </button> */}
    </div>
  )
}

export const ConnectionDisplay = () => {
  const [suggested, setSuggested] = useState(null)
  const [requests, setRequests] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/connections", Header)
      .then(({ data }) => {
        console.log("res:", data)
        setSuggested(data.users)
      })
      .catch((err) => {
        console.log("err:", err)
      })
    axios
      .get("http://localhost:5000/users/invite", Header)
      .then(({ data }) => {
        setRequests(data.inviters)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }, [])
  return suggested === null ? (
    <Loader />
  ) : (
    <div>
      <div className={styles.invitations}>
        <div>
          <p>Invitations</p>
        </div>
        {requests.map((user) => {
          return <Request {...user} />
        })}
      </div>
      <div className={styles.invitations}>
        <div>
          <p>Connections</p>
        </div>
        <div className={styles.suggestions}>
          {suggested.map((user) => {
            return (
              <Link to={`/othersprofile/${user.email}`}>
                {" "}
                <Suggest {...user} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
