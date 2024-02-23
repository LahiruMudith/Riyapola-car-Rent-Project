import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {TextField} from "@mui/material";
import {useState} from "react";
import Swal from 'sweetalert2'

const loginBtnSX = {
    width:'15vw',
    boxShadow: 3,
    color:'#FF7200',
    borderColor:'#FF7200',
    position:'relative',
    right:'32vw',
    top:'17vh',
    "&:hover": {
        color:'#ffffff',
        borderColor:'#ffffff',
    },
};
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export default function LoginMenu() {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const loginBtnClick = () => {
        handleClose()
        Toast.fire({
            icon: "success",
            title: "Log in successfully"
        });
    }


    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} sx={loginBtnSX} >
                Login
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Login Menu"}
                </DialogTitle>
                <DialogContent sx={{width:'500px'}}>
                    <TextField sx={{width:'31vw', margin:'1vh'}}
                               id="outlined-basic" label="Email" variant="outlined"
                               onChange={val => setEmail(val.target.value)}
                    />
                    <TextField sx={{width:'31vw', margin:'1vh'}}
                               id="outlined-basic" label="Password" variant="outlined"
                               onChange={val => setPassword(val.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => loginBtnClick()} autoFocus sx={{color:'#FF7200'}}>
                        Login
                    </Button>
                    <Button onClick={handleClose}>Cancle</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}