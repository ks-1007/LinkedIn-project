import styles from "./styles/ProfilePage.module.css"
export function About({ user }) {
  return (
    <>
      <div className={styles.aboutCont}>
        <p>About</p>
        <p>{user.about}</p>
      </div>
    </>
  )
}
