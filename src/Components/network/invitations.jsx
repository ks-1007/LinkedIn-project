import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./network.module.css"

const token = localStorage.getItem("token")
// console.log("token:", token)

const Header = {
  headers: {
    Authorization: "Bearer " + token,
  },
}

const Request = ({ name, description, _id }) => {
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
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHzgitxK-mG5w/profile-displayphoto-shrink_800_800/0/1631119018087?e=1638403200&v=beta&t=GcquY9Aqos37_wqHA3dLoCMRJj533gaZKsAf0VRw_v4"
          alt=""
        />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <button style={{ display: accepted ? "hidden" : "block" }}>Ignore</button>
      <button onClick={handleAccept} disabled={accepted}>
        {" "}
        {accepted ? "Accepted" : "Accept"}
      </button>
    </div>
  )
}
const Suggest = ({ name, description, _id }) => {
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
      <div></div>
      <div>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHzgitxK-mG5w/profile-displayphoto-shrink_800_800/0/1631119018087?e=1638403200&v=beta&t=GcquY9Aqos37_wqHA3dLoCMRJj533gaZKsAf0VRw_v4"
          alt=""
        />
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>11111 followers</p>
      <button onClick={handleConnect} disabled={disableConnect}>
        {" "}
        {disableConnect ? "Invitation sent" : "Connect"}
      </button>
    </div>
  )
}

export const Invitations = () => {
  const [suggested, setSuggested] = useState([])
  const [requests, setRequests] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/not_connections", Header)
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
  return (
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
          <p>Recommended for you</p>
        </div>
        <div className={styles.suggestions}>
          {suggested.map((user) => {
            return <Suggest {...user} />
          })}
        </div>
      </div>
    </div>
  )
}
