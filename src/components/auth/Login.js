import React from 'react'
import { TextField, Button, Box, Container } from '@material-ui/core'
import * as api_service from "../../service/api"
export default function Login() {

    const findAllUser = async () => {
        const users = await api_service.get("http://localhost:4400/api/v1/user")
        console.log(users);
    }
    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>Login Page</h1>
            <form>
                <Box display="flex" flexDirection="row" justifyContent="center">
                    <Box display="flex" flexDirection="column" style={{ flex: 0.5 }}>
                        <TextField id="email" label="email" type="email"></TextField> <br />
                        <TextField id="password" label="password" type="password"></TextField> <br />
                        <Button variant="contained" style={{ backgroundColor: "#039be5" }} >Login</Button> <br></br>
                        <Button variant="contained" href="http://localhost:4400/api/v1/auth/google" style={{ backgroundColor: "#039be5" }} >Google login</Button> <br />
                        <Button variant="contained" onClick={findAllUser} style={{ backgroundColor: "#039be5" }} >Find All User</Button>
                        <Box display="flex" justifyContent="flex-end">
                            <a href="/register">Register</a>
                        </Box>
                    </Box>
                </Box>
            </form>
        </Container>
    )
}
