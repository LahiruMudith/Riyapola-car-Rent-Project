import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {TextField} from "@mui/material";
import Swal from "sweetalert2";
import {useState} from "react";
import instance from "../../services/AxiosOrder.jsx";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Btns = {
    width:'14vw',
    boxShadow: 3,
    color:'#0e0d0d',
    backgroundColor:'#e3802d',
    borderColor:'#e3802d',
    position:'relative',
    left:'32vw',
    top:'2vh',
    borderRadius:'10px',
    marginLeft:'0.3vw',
    "&:hover": {
        color:'#ffffff',
        backgroundColor:'#e3802d',
        borderColor:'#ffffff',
    },
};

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

export default function AddNewVehicle() {
    const [v_num, setV_num] = useState('');
    const [v_name, setV_name] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');


    const addVehicleClick = () => {
        instance.post('/vehicle/add', {
            vehicle_Number:v_num,
            Day_Price:price,
            Vehicle_Name:v_name,
            color:color
        })
            .then(function (response) {
                Toast.fire({
                    title: 'Vehicle Added Successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <Card sx={{width:'50vw', minHeight:'60vh', margin:'auto', boxShadow:'5'}}>
            <CardContent>
                <TextField sx={{width:'40vw', marginLeft:'3vw', marginTop:'3vh'}} label="Vehicle Number" variant="standard" onChange={(val) => setV_num(val.target.value)} />
                <TextField sx={{width:'40vw', marginLeft:'3vw', marginTop:'3vh'}} label="Vehicle Name" variant="standard" onChange={(val) => setV_name(val.target.value)} />
                <TextField sx={{width:'40vw', marginLeft:'3vw', marginTop:'3vh'}} label="Vehicle Color" variant="standard" onChange={(val) => setColor(val.target.value)} />
                <TextField sx={{width:'40vw', marginLeft:'3vw', marginTop:'3vh'}} label="Price (1 Day)" variant="standard" onChange={(val) => setPrice(val.target.value)} />
            </CardContent>
            <CardActions>
                <Button sx={Btns}
                        variant="contained"
                        onClick={() => addVehicleClick()}
                >
                    Contained
                </Button>
            </CardActions>
        </Card>
    );
}