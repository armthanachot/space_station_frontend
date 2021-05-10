import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, TextField, Avatar, makeStyles } from '@material-ui/core'
import * as api_service from "../../service/api"
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom"
import withReactContent from 'sweetalert2-react-content'
import Lifestyle from "./Lifestyle"

export default function User() {
    const useStyles = makeStyles((theme) => ({
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
    }));
    const classes = useStyles();
    const history = useHistory()
    const MySwal = withReactContent(Swal)
    const [allUser, setAllUser] = useState([])
    // similar componentdidmount
    const fetchUser = async () => {
        try {
            const users = await api_service.get("user")

            setAllUser(users.data.data)
        } catch (error) {
            console.log(error.message);
            MySwal.fire({
                icon: 'error',
                title: 'error',
                text: 'Token Expired'
            })
            history.push("/login")
        }
    }

    useEffect(
        () => {
            fetchUser()
        }, []
    )
    return (
        <Container>
            <h1>Member</h1>
            <Grid container spacing={1}>

                {
                    allUser.map((item, index) => {
                        return ([
                            <Grid xs={6} md={6} xl={12} key={index}>
                                <Box display="flex" flexDirection="column" style={{ lineHeight: 3, backgroundColor: '#bbdefb', padding: '20px', border: "2px black solid" }} >
                                    <Box display="flex" flexDirection="row" justifyContent="center">
                                        <Grid xs={12} md={12} xl={6}>
                                            <Avatar alt="Profile image" src={`http://localhost:3300/static/img/${item.img}`} className={classes.large} /> <br />
                                        </Grid>
                                        <Grid xs={12} md={12} xl={6}>
                                            <Lifestyle accountFname={item.fname} accountLname={item.lname} email={item.email} image={`http://localhost:3300/static/img/${item.img}`} />
                                        </Grid>
                                    </Box>
                                    <Box display="flex" flexDirection="row" justifyContent="start">
                                        <TextField id="fname" label="fname" value={item.fname} style={{ marginRight: "5%" }}></TextField><br />
                                        <TextField id="lname" label="lname" value={item.lname}></TextField>
                                    </Box>
                                    <br />
                                    <TextField id="email" label="email" value={item.email}></TextField>
                                    <br />
                                </Box>
                                <br />
                            </Grid >

                        ])
                    })
                }
            </Grid>

        </Container>
    )
}
