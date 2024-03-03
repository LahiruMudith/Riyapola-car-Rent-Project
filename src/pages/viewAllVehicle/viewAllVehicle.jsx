import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import instance from "../../services/AxiosOrder.jsx";
import axios from "axios";
import vehi_photo from "../../assets/WhatsApp Image 2024-02-20 at 17.00.18_8f6372ac.jpg"
import Swal from "sweetalert2";
import VehicleUpdateMenu from "../../component/VehicleUpdateMenu/VehicleUpdateMenu.jsx";

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

export default function ViewAllVehicle() {
    const [data, setData] = useState([])

    const Btns = {
        width:'14vw',
        boxShadow: 3,
        color:'#0e0d0d',
        borderColor:'#e3802d',
        position:'relative',
        // right:'32vw',
        top:'2vh',
        borderRadius:'10px',
        marginLeft:'0.3vw',
        "&:hover": {
            color:'#ffffff',
            borderColor:'#ffffff',
        },
    };

    useEffect(() => {
        instance({
            method: "get",
            url: "/vehicle/search",
        }).then(function (response) {
            setData(response.data)
        });
    }, [<data></data>]);

    const deleteVehivle = (vehicleNumber) => {
        Swal.fire({
            title: "Do you want to delete this vehicle?",
            showDenyButton: true,
            showConfirmButton:false,
            showCancelButton: true,
            denyButtonText: "Delete",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isDenied) {
                Toast.fire({
                    title: 'Delete Successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000
                })
                instance.delete(`vehicle/delete/${vehicleNumber}`)
                    .then(response => {
                        useEffect(() => {
                            instance({
                                method: "get",
                                url: "/vehicle/search",
                            }).then(function (response) {
                                setData(response.data)
                            });
                        }, [data]);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else if (result.isDismissed) {

            }
        });
    }

    const UpdateVehicle = () => {
        <VehicleUpdateMenu/>
    }

    return (
        <Box sx={{display:'flex', flexWrap:'wrap'}}>
            {
                data.map((val,index) => (
                    <Card key={index} sx={{width:'29vw', height:'40vh', backgroundColor:'#e3802d', borderRadius:'10px', margin:'10px'}}>
                        <CardContent>
                            <Box sx={{display:'block'}}>
                                <img src={vehi_photo}
                                     style={{width: '7.5vw', display: 'flex', justifyContent: 'space-around'}}/>
                                <Box sx={{
                                    width: '19vw',
                                    height: '25vh',
                                    position: 'relative',
                                    left: '8vw',
                                    bottom: '22vh',
                                    border: '1px solid white',
                                    borderRadius:'2vh',
                                    paddingLeft: '1vw',
                                }}>
                                    <p style={{fontFamily:'monospace'}}>Vehicle Number: <span>{val.V_Number}</span></p>
                                    <p style={{fontFamily:'monospace'}}>Vehicle Name: <span>{val.V_Name}</span></p>
                                    <p style={{fontFamily:'monospace'}}>Vehicle Color: <span>{val.color}</span></p>
                                    <p style={{fontFamily:'monospace'}}>Price (1 Day): <span>{val.Day_Price}</span></p>
                                </Box>
                                <Box sx={{position: 'relative', top: '-17vh', display: 'flex'}}>
                                    <VehicleUpdateMenu style={Btns}
                                                       vehi_num={val.V_Number}
                                                       vehi_name={val.V_Name}
                                                       Propscolor={val.color}
                                                       Propsprice={val.Day_Price}
                                    />
                                    <Button variant="outlined" size="small" sx={Btns} onClick={() => deleteVehivle(val.V_Number)}>Drop Vehicle</Button>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))
            }
        </Box>

    )
}