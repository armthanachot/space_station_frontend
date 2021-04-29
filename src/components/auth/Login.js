import React from 'react'
import {TextField,Button,Box,Container} from '@material-ui/core'
export default function Login() {
    return (
        <Container>
            <h1 style={{textAlign:"center"}}>Login Page</h1>
            <form>
                <Box display="flex" flexDirection="row" justifyContent="center">
                <Box display="flex" flexDirection="column" style={{flex:0.5}}>
                <TextField id="email" label="email" type="email"></TextField> <br/>
                <TextField id="password" label="password" type="password"></TextField> <br/>
                <Button variant="contained" style={{backgroundColor:"#039be5"}} >Login</Button>
                <Box display="flex" justifyContent="flex-end">
                    <a href="/register">Register</a>
                </Box>
                </Box>
                </Box>
            </form>
        </Container>
    )
}
