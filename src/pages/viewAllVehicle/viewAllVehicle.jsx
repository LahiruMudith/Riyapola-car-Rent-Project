import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


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
    return (
        <Box sx={{display:'flex', flexWrap:'wrap'}}>
            <Card sx={{width:'29vw', minHeight:'42vh', backgroundColor:'#e3802d', borderRadius:'10px', margin:'10px'}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        lahiru
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                    <Box sx={{position:'relative', top:'13.2vh', display:'flex'}}>
                        <Button variant="outlined" size="small" sx={Btns}>Update Vehicle Details</Button>
                        <Button variant="outlined" size="small" sx={Btns}>Drop Vehicle</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>

    )
}