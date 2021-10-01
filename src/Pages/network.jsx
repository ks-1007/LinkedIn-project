import React from "react";
import { Invitations } from "../Components/network/invitations";
import { ManageNetwork } from "../Components/network/manageNetwork";
import styles from './pages.module.css'


export const Network = () => {
    
    return (
        <div>
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