
import styles from './network.module.css'

const Request = () => {
    return(
        <div className={styles.inv_div}>
            <div>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHzgitxK-mG5w/profile-displayphoto-shrink_800_800/0/1631119018087?e=1638403200&v=beta&t=GcquY9Aqos37_wqHA3dLoCMRJj533gaZKsAf0VRw_v4" alt="" />
            </div>
                    <div>
                        <h4>Ranjeet singh diwakar</h4>
                        <p>Aspiring Full Stack Web Developer | Learning Mern Stack at Masai School,</p>
                    </div>
                    <button>Ignore</button>
                    <button>Accept</button>        
        </div>
    )
}
const Suggest = () => {
    return (
        <div className={styles.suggest}>
            <div>
                
            </div>
            <div>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHzgitxK-mG5w/profile-displayphoto-shrink_800_800/0/1631119018087?e=1638403200&v=beta&t=GcquY9Aqos37_wqHA3dLoCMRJj533gaZKsAf0VRw_v4" alt="" />
            </div>
            <h4>Radhika Guptha</h4>
            <p>MD & CEO, Edelweiss AMC | LinkedIn Top Voices 2020</p>
            <p>11111 followers</p>
            <button>Follow</button>
        </div>
    )
}

export const Invitations = () => {
    return (
        <div>
            <div className={styles.invitations}>
                <div>
                    <p>Invitations</p>
               </div>
                <Request/>
                <Request/>
            </div>
            <div className={styles.invitations}>
                <div>
                    <p>Recommended for you</p>
                </div>
                <div className={styles.suggestions}>
                    <Suggest/>
                    <Suggest />
                    <Suggest />
                    <Suggest/>
                </div>
            </div>
        </div>
    )
}