import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MainComponent from "./Main"
import { Button, Container, Box } from "@material-ui/core"
import Route from "./components/Route"
export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        500: "#03a9f4"
      },
      secondary: {
        A400: "#76ff03"
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
        <MainComponent/>
        <br/>
        <Container>
        <Box display="flex" flexDirection="row" justifyContent="center" style={{backgroundColor:"#ff6f00" }}>
        <Button href="/">Home</Button>
        <Button href="/login">Login</Button>
        <Button href="/register">Registration</Button>
        </Box>
        <br/>
        </Container>
        <Route/>
    </ThemeProvider>
  )
}
