import React , {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Context } from '../Context/UserContext'

function Login () {
    const { login } = useContext(Context);
    const [name , setName] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    function loginFunc() {
        const profile = {
            name,
            password
        }
        login(profile)
        history.push("/");
    }

    return ( 
        <div className = "Login" >
            <TextField onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Username"/>
            <TextField onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password"/>
            <Button variant="contained" onClick={loginFunc}>Log In</Button>
        </div>
    )
}

export default Login