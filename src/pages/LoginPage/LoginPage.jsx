import './LoginPage.css'
import {Box, Button} from "@mui/material";
import logo from "../../assets/logo.png"
import textPic from "../../assets/Text.png"
import bgImage from "../../assets/backgroundImage.jpg"

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

export default function LoginPage() {
    return (
        <Box className={"bgImage"}>
            <img src={logo} className={"logo"}/>
            <img src={textPic} className={"textPic"}/>
            <Button variant="outlined" sx={loginBtnSX}>Login</Button>
        </Box>
    )
}