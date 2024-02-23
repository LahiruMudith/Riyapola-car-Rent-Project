import './App.css'
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import {useState} from "react";
import MainPage from "../pages/MainPage/MainPage.jsx";

function App() {
    const [loader, setLoader] = useState(false)


    return (
        <>
            {
                loader ?
                    <LoginPage/>
                :
                    <MainPage/>
            }
        </>
    )
}

export default App
