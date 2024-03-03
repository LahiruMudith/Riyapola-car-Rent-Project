import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {TextField} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {useState} from "react";
import instance from "../../services/AxiosOrder.jsx";
import Swal from "sweetalert2";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function VehicleUpdateMenu({style, vehi_num, vehi_name, Propscolor, Propsprice}) {
    const [open, setOpen] = React.useState(false);
    const [v_num, setV_num] = useState(vehi_num);
    const [v_name, setV_name] = useState(vehi_name);
    const [color, setColor] = useState(Propscolor);
    const [price, setPrice] = useState(Propsprice);
    const [image, setImage] = useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const btnStyle = {
        width:'32vw',
        margin:'0.5vw'
    }

    const updateClick = () => {
        instance.put(`vehicle/update/${vehi_num}`, {
            vehicle_Number:v_num,
            Day_Price:price,
            Vehicle_Name:v_name,
            color:color
        })
            .then((response) => {
                handleClose()
                Toast.fire({
                    title: 'Update Successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen} sx={style}>
                Update Vehicle
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                {/*<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">*/}
                {/*    Modal title*/}
                {/*</DialogTitle>*/}
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <TextField id="filled-basic" value={v_num} onChange={(val) => setV_num(val.target.value)} variant="filled" sx={btnStyle} />
                    <TextField id="filled-basic" value={v_name} onChange={(val) => setV_name(val.target.value)} variant="filled" sx={btnStyle} />
                    <TextField id="filled-basic" value={color} onChange={(val) => setColor(val.target.value)} variant="filled" sx={btnStyle} />
                    <TextField id="filled-basic" value={price} onChange={(val) => setPrice(val.target.value)} variant="filled" sx={btnStyle} />
                    <Button sx={{margin:'0.5vw'}}
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload new Profile Pic
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => updateClick()}>
                        Update
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}