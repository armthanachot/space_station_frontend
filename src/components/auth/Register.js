import React, { useState } from 'react'
import { TextField, Button, Box, Container, Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import * as api_service from "../../service/api"

export default function Register() {
    const MySwal = withReactContent(Swal)
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
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

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [address, setAddress] = useState('')
    const [img, setImg] = useState({})
    let [preview_img, setPreviewImg] = useState('')
    const register = async (e) => {
        e.preventDefault();
        if (password !== confirm_password) {
            MySwal.fire({
                icon: 'error',
                title: 'error',
                text: 'Password and Confirm Password not Equal'
            })
        }
        const profile = img
        const formData = new FormData()
        formData.append("img", profile)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("fname", fname)
        formData.append("lname", lname)
        formData.append("address", address)
        const signedup = await api_service.postFormData("user/signup", formData)
        console.log("signedup: ",signedup);
        MySwal.fire({
            icon: 'success',
            title: 'success',
            text: 'Registerd'
        })
    }
    const setEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const setPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const setConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }
    const setFnameChange = (e) => {
        setFname(e.target.value)
    }
    const setLnameChange = (e) => {
        setLname(e.target.value)
    }
    const setAddressChange = (e) => {
        setAddress(e.target.value)
    }
    const setImgChange = (e) => {
        setPreviewImg(URL.createObjectURL(e.target.files[0]))
        setImg(e.target.files[0])
    }
    const test_data = [
        {
            name: "Thanchot"
        },
        {
            name: "Patchara"
        }
    ]
    return (
        <Container style={{ backgroundColor: "#69f0ae", border: "solid black 5px" }}>
            <h1>Registration Page</h1>
            <form onSubmit={register} >
                <Grid container spacing={5} >
                    <Grid item xs={12} md={12} xl={6}>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <TextField onChange={setEmailChange} id="email" label="email" type="email"></TextField>
                            <TextField onChange={setPasswordChange} id="password" label="password" type="password"></TextField>
                            <TextField onChange={setConfirmPasswordChange} id="confirm_password" label="confirm_password" type="password"></TextField>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={12} xl={6}>
                        <Box display="flex" flexDirection="column" justifyContent="center">
                            <TextField onChange={setFnameChange} id="firstname" label="firstname"></TextField>
                            <TextField onChange={setLnameChange} id="lastname" label="lastname"></TextField>
                            <TextField onChange={setAddressChange} id="address" label="address"></TextField> <br />
                            <Box display="flex" flexDirection="row" justifyContent="center">
                                <Avatar alt="Profile image" src={preview_img} className={classes.large} /> <br />
                            </Box><br />
                            <input type="file" placeholder="file" onChange={setImgChange}></input> <br />
                            <Button style={{ backgroundColor: "#4fc3f7" }} type="submit">Signup</Button>
                        </Box>
                    </Grid>
                    <br />
                    {
                        test_data.map((item, index) => {
                            return <TextField value={item.name}></TextField>
                        })
                    }
                </Grid>
            </form>
        </Container>
    )
}
