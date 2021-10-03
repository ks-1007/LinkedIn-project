import styles from "./styles/ProfilePage.module.css"
export function Skills() {
  return (
    <div className={styles.skillsCont}>
      <p>Skills & endorsements</p>

      {/* <button>Take skill quiz</button> */}
      <div>
        <div>
          <p>JavaScript</p>
        </div>
        <div>
          <p>React.js</p>
        </div>
        <div>
          <p>Node.js</p>
        </div>
        <div>
          <p>Express.js</p>
        </div>
        <div>
          <p>Html</p>
        </div>
        <div>
          <p>Css</p>
        </div>
        <div>
          <p>Redux</p>
        </div>
        <div>
          <p>Git</p>
        </div>
      </div>
    </div>
  )
}
