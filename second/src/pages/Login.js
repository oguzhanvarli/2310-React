import { TextField, Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = async() => {

        //  fetch ile post etme
    //    let sendData = await fetch('https://dummyjson.com/auth/login', {
    //         method: "POST",
    //         headers: {'Content-Type' : 'application/json'},
    //         body : JSON.stringify({
    //             username: username,
    //             password : password
    //         })
    //    }).then(res => res.json())

    //Axios ile post etme
    let data = {
        username : username,
        password: password
    }
        axios.post('https://dummyjson.com/auth/login', data).then(response => {
            navigate('/')
            toast.success('Welcome ' + response.data.firstName )
        }).catch(error => {
            toast.error(error.response.data.message)
            console.log('Login Error')
        })
    }

    return (
        <div className='loginContainer'>
                <TextField id="username"
                label="Username"
                variant="outlined"
                sx={{my : 2}}
                onChange={(event) => setUsername(event.target.value)}
                />
                
                <TextField id="password" 
                label="Password" 
                variant="outlined" 
                sx={{my : 2}}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="outlined" color="success" sx={{mx: 5}} onClick={handleLogin} >
                    Login
                </Button>
        </div>
    )
}

export default Login