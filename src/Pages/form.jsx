import { useState } from 'react'
import styles from './pages.module.css'
export const Form = () => {
    const initState = {
        name: "",
        email: "",
        description:""
    }
    const [user, setUser] = useState(initState);

    const handleInput = (e) => {
        const data = {
            ...user,
            [e.target.name]: e.target.value
        }
        setUser(data);
    }
    return (
        <div>
            <div></div>
            <div className={styles.form}>
                <input type="text" name="name" placeholder="name" onInput={handleInput}/><br/>
                <input type="email" name="email" placeholder="email" onInput={handleInput}/><br/>
                <input type="text" name="description" onInput={handleInput} placeholder="description" />
                <button>continue</button>
            </div>
        </div>
    )
}