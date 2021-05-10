import React, { useState } from 'react'
import { TextField, Button, Box, Container } from '@material-ui/core'
import * as api_service from "../../service/api"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useHistory } from 'react-router'

export default function Login() {


    const MySwal = withReactContent(Swal)
    const history = useHistory()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const setEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const setPasswordChange = (e) => {
        setPassword(e.target.value)

    }
    // const findAllUser = async () => {
    //     const users = await api_service.get("http://localhost:4400/api/v1/user")
    //     console.log(users);
    // }
    const login = async () => {
        try {

            const user = { email, password }
            const logedin = await api_service.post("user/login", user)
            const { status, data } = logedin
            if (status === 200) {
                MySwal.fire({
                    icon: 'success',
                    title: 'success',
                    text: 'Login Success'
                })
                localStorage.setItem("token", data.data)
                history.push('/user')
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                title: 'error',
                text: 'Email or Password is Invalid'
            })
        }
    }
    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>Login Page</h1>
            <form>
                <Box display="flex" flexDirection="row" justifyContent="center">
                    <Box display="flex" flexDirection="column" style={{ flex: 0.5 }}>
                        <TextField id="email" onChange={setEmailChange} label="email" inputProps={{ required: true }} type="email"></TextField> <br />
                        <TextField id="password" onChange={setPasswordChange} label="password" inputProps={{ required: true }} type="password"></TextField> <br />
                        <Button variant="contained" onClick={login} style={{ backgroundColor: "#039be5" }} >Login</Button> <br></br>
                        {/* <Button variant="contained" href="http://localhost:4400/api/v1/auth/google" style={{ backgroundColor: "#039be5" }} >Google login</Button> <br />
                        <Button variant="contained" onClick={findAllUser} style={{ backgroundColor: "#039be5" }} >Find All User</Button> */}
                        <Box display="flex" justifyContent="flex-end">
                            <a href="/register">Register</a>
                        </Box>
                    </Box>
                </Box>
            </form>
        </Container>
    )
}
