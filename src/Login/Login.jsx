import React, {useState} from 'react';
import styles from './Login.module.css';
import { useHistory } from "react-router-dom";

const Login = ({setUser}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(true);
    const history = useHistory();
    const login = () => {
        setUser(userName);
        history.push('/');
    }
    return (
        <div>

            <form className={styles.formContainer}>
            <div className={styles.container}>
            <label htmlFor="uname"><b>Username</b></label>
            <input id="uname" type="text" placeholder="Enter Username" name="uname" required value={userName} onChange={({target: {value}}) => setUserName(value)}/>
            <label htmlFor="psw"><b>Password</b></label>
            <input id="psw" type="password" placeholder="Enter Password" name="psw" required value={password} onChange={({target: {value}}) => setPassword(value)}/>
            <button onClick={login}>Login</button>
            
            <label>
                <input type="checkbox" checked={remember} name="remember" onChange={() => {setRemember(!remember)}}/> Remember me
            </label>
            </div>
            </form>
        </div>
    )
}

export default Login;
