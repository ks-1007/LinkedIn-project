import styles from './jobs.module.css'
import { FaSearch } from 'react-icons/fa';


const jobs_arr = [
    {
        url:"https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1641427200&v=beta&t=IDobDv2mrJ9LNqf0y-NzTR1nNR2Ahcv9KRqU9-e7N4s",
        position: "Front End Engineer",
        company: "Amazon",
        location: "Hyderabad, Telangana, India",
        post_time: "2 days ago",
        applied:"16 applicants"
    },
    {
        url:"https://media-exp1.licdn.com/dms/image/C4E0BAQF6LmpfldHNXA/company-logo_100_100/0/1631781694772?e=1641427200&v=beta&t=RQCr_rSEZd2iex-bFonyGVObMUGAbkn2TLTB1iIaIXY",
        position: "IT Interns(Testing, UI/UX, Nodejs)",
        company: "CLOUDEDZ",
        location: "Hyderabad, Telangana, India(on-site)",
        post_time: "3 days ago",
        applied:"19 applicants"
    },
    {
        url:"https://media-exp1.licdn.com/dms/image/C510BAQF_zIelQWSBvw/company-logo_100_100/0/1519856321426?e=1641427200&v=beta&t=wCACqBwmQ-LTTYDRDTDRJE0biisEdZMSkNzf_vkGQp4",
        position: "Software Eng -601",
        company: "PMorgan Chase & Co.",
        location: "Hyderabad, Telangana, India",
        post_time: "1 week ago",
        applied:"13 applicants"
    },
    {
        url:"https://media-exp1.licdn.com/dms/image/C4D0BAQGjwPKNaVZ7jQ/company-logo_100_100/0/1625578658814?e=1641427200&v=beta&t=uJ1j3wYbl_8vFJsYZymWihQI-HQ0CGSEY8Wj5QGgU3Q",
        position: "Frontend Developer",
        company: "IBM",
        location: "Bengaluru, Karnataka, India",
        post_time: "1 day ago",
        applied:""
    }
]

const SingleJob = ({ele}) => {
    return (
        <div className={styles.single_job}>
            <div>
                <img src={ele.url} alt="" />
            </div>
            <div>
                <a href="ad"><h4>{ele.position}</h4></a>
                <p>{ele.company}<br />{ele.location}</p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
                    </svg><p>Actively recruiting</p>
                </p>
                <p>{ele.post_time} <span>- {ele.applied}</span></p>
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
                        {
                            jobs_arr.map((ele) => {
                                return <SingleJob ele={ele} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}