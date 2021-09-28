import styles from "./styles/ProfilePage.module.css"
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
    </div>
  )
}
