import { JobsList } from '../Components/jobs/jobs_list'
import { Options } from '../Components/jobs/options'
import { Prepare } from '../Components/jobs/prepare'
import styles from './pages.module.css'
import Navbar from "../Components/Nav/Navbar"

export const Jobs = () => {
    return (
        <div>
            <Navbar/>
            <div className={styles.nav}></div>
            <div className={styles.jobs}>
                <Options />
                <JobsList/>
                <Prepare/>
            </div>
        </div>
    )
}