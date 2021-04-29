import React from 'react'
import { Button, Container, Grid, Box } from "@material-ui/core"
export default function Main() {
  return (
    <Container>
        <Grid container spacing={1}>
          <Grid item xs={4} md={6} xl={12}>
            <Button fullWidth variant="outlined" style={{ backgroundColor: "#00bcd4" }}>Run</Button>
          </Grid>
          <Grid item xs={4} md={6} xl={12}>
            <Button fullWidth variant="outlined" style={{ backgroundColor: "#00bcd4" }}>Run</Button>
          </Grid>
          <Grid item xs={4} md={6} xl={12}>
            <Button fullWidth variant="outlined" style={{ backgroundColor: "#00bcd4" }}>Run</Button>
          </Grid>
        </Grid>
        <Box display="flex" flexDirection="row" justifyContent="space-between" style={{height:500,backgroundColor:"yellow"}} alignItems="center">
          <Box display="flex" flexDirection="column" style={{backgroundColor:"red"}}>

            <p>Test Material 1</p>
            <p>Test Material 2</p>
            <p>Test Material 3</p>
          </Box>
{/* sub 2 flex direction ตามตัวแม่ */}
          <Box display="flex" flexDirection="column" style={{backgroundColor:"lightgreen"}}>

            <p>Test Material 4</p>
            <p>Test Material 5</p>
            <p>Test Material 6</p>
          </Box>

          <Box display="flex" flexDirection="column" style={{backgroundColor:"blue"}}>

            <p>Test Material 7</p>
            <p>Test Material 8</p>
            <p>Test Material 9</p>
          </Box>
        </Box>
      </Container>
    )
}
