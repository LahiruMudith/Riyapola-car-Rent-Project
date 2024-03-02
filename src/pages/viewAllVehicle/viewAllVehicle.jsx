import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useEffect} from "react";
import instance from "../../services/AxiosOrder.jsx";
import axios from "axios";
import vehi_photo from "../../assets/WhatsApp Image 2024-02-20 at 17.00.18_8f6372ac.jpg"

export default function ViewAllVehicle() {
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
            console.log(response.data)
        });
    }, []);

    return (
        <Box sx={{display:'flex', flexWrap:'wrap'}}>
            <Card sx={{width:'29vw', height:'40vh', backgroundColor:'#e3802d', borderRadius:'10px', margin:'10px'}}>
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
                            border: '1px solid white'
                        }}>Discrition</Box>
                        <Box sx={{position: 'relative', top: '-17vh', display: 'flex'}}>
                            <Button variant="outlined" size="small" sx={Btns}>Update Vehicle Details</Button>
                            <Button variant="outlined" size="small" sx={Btns}>Drop Vehicle</Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>

    )
}