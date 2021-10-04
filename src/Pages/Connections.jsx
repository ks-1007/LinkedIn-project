import React from "react"
import { ConnectionDisplay } from "../Components/network/ConnectionDisplay"
import { ManageNetwork } from "../Components/network/manageNetwork"
import styles from "./pages.module.css"
import Navbar from "../Components/Nav/Navbar"
import Loader from "../Components/loader/Loader"

export const Connections = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.nav}></div>
      <div className={styles.network}>
        <ManageNetwork />
        <div className={styles.connections}>
          <ConnectionDisplay />
        </div>
      </div>
    </div>
  )
}
