import { JobsList } from '../Components/jobs/jobs_list'
import { Options } from '../Components/jobs/options'
import { Prepare } from '../Components/jobs/prepare'
import styles from './pages.module.css'

export const Jobs = () => {
    return (
        <div>
            <div className={styles.nav}></div>
            <div className={styles.jobs}>
                <Options />
                <JobsList/>
                <Prepare/>
            </div>
        </div>
    )
}