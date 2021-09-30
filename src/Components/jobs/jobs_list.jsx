import styles from './jobs.module.css'
import { FaSearch } from 'react-icons/fa';

const SingleJob = () => {
    return (
        <div className={styles.single_job}>
            <div>
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1640822400&v=beta&t=IL0h6Fz20eRZDHdkuj_Y0FDF0ux9bOcTBm9J_T013SU" alt="" />
            </div>
            <div>
                <a href="ad"><h4>Front End Engineer</h4></a>
                <p>Amazon<br/>Hyderabad, Telangana, India</p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
                    </svg><p>Actively recruiting</p>
                </p>
                <p>1 day ago <span>- 16 applicants</span></p>
            </div>
           
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
                </svg>
            </div>
        </div>
    )
}



export const JobsList = () => {
    return (
        <div>
            <div className={styles.jobs_list}>
                <div className={styles.suggest_jobs}>
                    <p>Suggested job searches</p>
                    <div>
                        <button><FaSearch /><span>full stack developer</span></button>
                        <button><FaSearch /><span>hr</span></button>
                        <button><FaSearch /><span>legal</span></button>
                        <button><FaSearch /><span>sales</span></button>
                        <button><FaSearch /><span>google</span></button>
                        <button><FaSearch /><span>amazon</span></button>
                        <button><FaSearch/><span>analyst</span></button>
                    </div>
                </div>
                <div className={styles.jobs_available}>
                    <p>Recommended for you<br/><span>Based on your profile and search history.</span></p>
                    <div>
                        <SingleJob />
                        <SingleJob />
                        <SingleJob />
                        <SingleJob />
                        <SingleJob/> 
                    </div>
                </div>
            </div>
        </div>
    )
}