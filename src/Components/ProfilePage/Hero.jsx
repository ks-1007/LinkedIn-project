import styles from "./styles/ProfilePage.module.css"
export function Hero() {
  return (
    <div className={styles.heroCont}>
      <div className={styles.bgImageCont}>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5616AQER4T-xhofYAA/profile-displaybackgroundimage-shrink_200_800/0/1629004315429?e=1638403200&v=beta&t=RkH2coHgsufTUF_lrSqn7JfmvEd8rxRiDa1Aeu4fhPA"
          alt=""
          srcset=""
        />
      </div>
      <div className={styles.profileImageCont}>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQH4XQ6lmGPozw/profile-displayphoto-shrink_200_200/0/1632109602585?e=1638403200&v=beta&t=R7Lgc4CWWIECFg_eXr31QxUHBesaBMp5DNOm03u8tiQ"
          alt=""
          srcset=""
        />
      </div>
      <div className={styles.infoCont}>
        <div>
          <h2>Kumar Saurav</h2>
          <p>
            Aspiring Full Stack Web Developer | Learning MERN Stack at Masai
            School
          </p>
          <p style={{ color: "rgb(102,102,102)" }}>
            Ghaziabad, Uttar Pradesh, India . <span>Contact info</span>{" "}
          </p>
          <p>
            {" "}
            <span>213 connections</span>{" "}
          </p>
          <div className={styles.btnDiv}>
            <button className={styles.openToBtn}>Open to</button>
            <button>Add section</button>
            <button>More</button>
          </div>
        </div>

        <div className={styles.infoRight}>
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1640822400&v=beta&t=ddXeOiLdTF1sRaL2VUhtjhp4XmzPg8n_VzDEHlNDmLU"
            alt=""
            srcset=""
          />
          <p>Masai School</p>
        </div>
      </div>
    </div>
  )
}
