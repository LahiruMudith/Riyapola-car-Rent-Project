import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {TextField} from "@mui/material";

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

export default function LoginMenu() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{width:'31vw', margin:'1vh'}} />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{width:'31vw', margin:'1vh'}} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus sx={{color:'#FF7200'}}>
                        Login
                    </Button>
                    <Button onClick={handleClose}>Cancle</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}