import styles from "./styles/ProfilePage.module.css"
import { FaSatelliteDish } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import { BiMoney } from "react-icons/bi"
import { BsBookmarkFill } from "react-icons/bs"
export function Dashboard() {
  return (
    <div className={styles.dashboardCont}>
      <p>Your Dashboard</p>
      <p
        style={{
          fontSize: "18px",
          fontStyle: "italic",
          color: "rgb(89,93,97)",
        }}
      >
        Private to you
      </p>
      <div className={styles.profileStats}>
        <div>
          <p>96</p>
          <p>Who viewed your profile</p>
        </div>
        <div>
          <p>62</p>
          <p>Post views</p>
        </div>
        <div>
          <p>12</p>
          <p>Search appearances</p>
        </div>
      </div>
      <div className={styles.dashboardExtras}>
        <div>
          <div>
            <FaSatelliteDish className={styles.dashboardIcons} />
          </div>
          <div>
            <p>
              Creator mode: <span>Off</span>{" "}
            </p>
            <p>
              Grow your audience and get discovered by highlighting content on
              your profile.
            </p>
          </div>
        </div>
        <div>
          <div>
            <FaUserFriends className={styles.dashboardIcons} />
          </div>
          <div>
            <p>My Network</p>
            <p>Manage your connections, events and interests.</p>
          </div>
        </div>
        <div>
          <div>
            <BiMoney className={styles.dashboardIcons} />
          </div>
          <div>
            <p>Salary insights</p>
            <p>See how your salary compares to others in the community.</p>
          </div>
        </div>
        <div>
          <div>
            <BsBookmarkFill className={styles.dashboardIcons} />
          </div>
          <div>
            <p>My items</p>
            <p>Keep track of your jobs, courses and articles.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
