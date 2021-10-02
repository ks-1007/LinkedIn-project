import { BiPencil } from "react-icons/bi"
import styles from "./styles/ProfilePage.module.css"
export function Education() {
  return (
    <div className={styles.educationCont}>
      <p>Education</p>
      <BiPencil className={styles.editPencil} />
      <div>
        <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1640822400&v=beta&t=ddXeOiLdTF1sRaL2VUhtjhp4XmzPg8n_VzDEHlNDmLU"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <p>Masai School</p>
          <p>Full Stack Web Development</p>
          <p>2021-2021</p>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQGpFYtpNvOlqQ/company-logo_100_100/0/1519909686595?e=1640822400&v=beta&t=Xpq2ei4Ft_wEK8jpl5XT3yCRP8bHMQfTXNbr7JJ6v3Q"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <p>NIE</p>
          <p>B.E in Mechanical Engineering</p>
          <p>2016-2020</p>
        </div>
      </div>
      <div>
        <div>
          <img
            src="data:image/png;base64,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"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <p>St. Joseph's International School</p>
          <p>HSC</p>
          <p>2015-2016</p>
        </div>
      </div>
      <p>Licenses & certifications</p>
      <div>
        <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQGWZ7p_vSxYIA/company-logo_100_100/0/1626808359459?e=1640822400&v=beta&t=ffCMTxNsM5W9RllT3ZaGBke7bTVYAn6Nzwpm7pAs0Ks"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <p>Problem Solving</p>
          <p>HackerRank</p>
          <p>Issued Sep 2020 . No Expiration Date</p>
          <p style={{ color: "rgb(102,102,102)" }}>
            Credential ID ABHF536BD73B8
          </p>
          <p
            style={{
              color: "rgb(102,102,102)",
              marginTop: "10px",
              fontWeight: "500",
            }}
          >
            See credential
          </p>
        </div>
      </div>
    </div>
  )
}
