import styles from "./styles/ProfilePage.module.css"
import "react-responsive-modal/styles.css"
import styled from "styled-components"
import _ from "lodash"

export function Hero({ user }) {
  return (
    <>
      <div className={styles.heroCont}>
        <div className={styles.bgImageCont}>
          <img
            src={
              user.background_pic ||
              "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
            }
            alt=""
            srcset=""
          />
        </div>
        <div className={styles.profileImageCont}>
          <img
            src={
              user.profile_pic ||
              "https://komarketing.com/images/2014/08/linkedin-default.png"
            }
            alt=""
            srcset=""
          />
        </div>
        <div className={styles.infoCont}>
          <div>
            <p style={{ fontSize: "25px", color: "black", fontWeight: "500" }}>
              {_.startCase(user.name)}
            </p>
            <p style={{ color: "black", fontSize: "18px" }}>
              {_.startCase(user.description)}
            </p>
            <p style={{ color: "rgb(102,102,102)" }}>
              {_.startCase(user.location)} <span>Contact info</span>{" "}
            </p>
            <p style={{ margin: "10px 0" }}>
              {" "}
              <span>{user.connections.length} connections</span>{" "}
            </p>
            <div className={styles.btnDiv}>
              {/* <button className={styles.openToBtn}>Open to</button>
              <button>Add section</button>
              <button>More</button> */}
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
    </>
  )
}
