import React from "react";
import Navbar from "../Components/Nav/Navbar";
import { Invitations } from "../Components/network/invitations";
import { ManageNetwork } from "../Components/network/manageNetwork";
import styles from './pages.module.css'


export const Network = () => {
    
    return (
        <div>
            <Navbar/>
            <div className={styles.nav}></div>
                <div className={styles.network}>
                    <ManageNetwork/>
                    <div className={styles.connections}>
                        <Invitations/>
                    </div>
                </div>
        </div>
    )
}