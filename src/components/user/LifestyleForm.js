import React from 'react'
import { Avatar, Button,  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function LifestyleForm() {
    const [open, setOpen] = React.useState(false);
    const [images,setImages] = React.useState()
    const [previewImage,setpreviewImage] = React.useState()
    const [fileArray,setFileArray] = React.useState([])
    const img_arr = []
    const handleChangeImages = (e)=>{
        const files = e.target.files
        for(let i=0;i < files.length ; i++){
            img_arr.push(URL.createObjectURL(files[i]))
            setFileArray(img_arr)
        }
        setImages(e.target.files)

    }
    console.log(fileArray);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>

            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
      </Button>
            <Dialog open={open} onClose={handleClose} fullWidth aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Upload your lifestyle.
                        <Grid container>

                        {
                            fileArray.map((item,index)=>{
                                return( [
                                    <Grid xs={12} md={12} xl={6}>

                                        <img src={item} style={{maxWidth: "100%", height: "auto"}}/>
                                    </Grid>
                            ])
                        })
                    }
                    </Grid>
          </DialogContentText>
                    <input type="file" multiple onChange={handleChangeImages}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
          </Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}
