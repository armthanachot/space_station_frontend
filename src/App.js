import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import MainComponent from "./Main"
import { Button, Container, Box } from "@material-ui/core"
import Route from "./components/Route"
import { useHistory } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function App() {
  const history = useHistory()

  const logout = ()=>{
    withReactContent(Swal).fire({
      title: 'Are you sure?',
      text: "You want to logout",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
  }).then((result) => {
      if (result.isConfirmed) {
          localStorage.removeItem("token")
          history.push("/login")
      }
  })
  }
  const theme = createMuiTheme({
    palette: {
      primary: {
        500: "#03a9f4"
      },
      secondary: {
        A400: "#f9a825"
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
        {/* <MainComponent/> */}
        <br/>
        <Container>
        <Box display="flex" flexDirection="row" justifyContent="center" style={{backgroundColor:"#ff6f00" }}>
        <Button href="/">Home</Button>
        <Button href="/login">Login</Button>
        <Button href="/register">Registration</Button>
        <Button onClick={logout}>Logout</Button>
        </Box>
        <br/>
        </Container>
        <Route/>
    </ThemeProvider>
  )
}
