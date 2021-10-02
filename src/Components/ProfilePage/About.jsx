import { BiPencil } from "react-icons/bi"
import styles from "./styles/ProfilePage.module.css"
export function About() {
  return (
    <div className={styles.aboutCont}>
      <BiPencil className={styles.editPencil} />
      <p>About</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        voluptatibus esse porro nisi fugiat quibusdam. Nihil placeat, tempore,
        dolorem illo deserunt quae facilis cumque quidem neque perspiciatis in,
        alias vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
        saepe.
      </p>
    </div>
  )
}
