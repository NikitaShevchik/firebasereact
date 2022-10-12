import React, { useState } from 'react'
import styles from './Form.module.scss'

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.form}>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email..." />
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password..." />
            <button onClick={handleClick}>
                {title}
            </button>
        </div>
    )
}

export default Form;