import styles from './notify.module.css'

const Single = () => {
    return (
        <div className={styles.single_notify}>
            <div>
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1640822400&v=beta&t=ddXeOiLdTF1sRaL2VUhtjhp4XmzPg8n_VzDEHlNDmLU" alt="" />
            </div>
            <div>
                <p>Masai School shared a post: Masai tribe is now 20k strong on Discord! If you are not a part already,
                    join us on our discord server and get all the insider info on coding, workshops,</p>
            </div>
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                </svg>
            </div>
        </div>
    )
}

export const DetailNotify = () => {
    return (
        <div>
            <div className={styles.list_notify}>
                <div className={styles.notify_list}>
                    <Single />
                    <hr />
                    <Single />
                    <hr />
                    <Single />
                    <hr />
                    <Single />
                </div>
            </div>
        </div>
    )
}