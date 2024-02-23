import InboxIcon from "@mui/icons-material/MoveToInbox";
import viewVehicle from "../../assets/icon/vehicles.png"
import addNew from "../../assets/icon/addNew.png"
import viewRequest from "../../assets/icon/viewRequest.png"
import ViewAllVehicle from "../../pages/viewAllVehicle/viewAllVehicle.jsx";
import AddNewVehicle from "../../pages/addNewVehicle/addNewVehicle.jsx";
import ViewRequest from "../../pages/viewRequest/viewRequest.jsx";

const routes = [
    {
        path:'/viewAllVehicle',
        name:'View All Vehicle',
        key:'viewAllVehicle',
        icon:<img src={viewVehicle} style={{width:'2vw'}}/>,
        component:<ViewAllVehicle/>
    },
    {
        path:'/addVehicle',
        name:'Add Vehicle',
        key:'addVehicle',
        icon:<img src={addNew} style={{width:'2vw'}}/>,
        component:<AddNewVehicle/>
    },
    {
        path:'/customersRequests',
        name:'Customer Requests',
        key:'customerRequests',
        icon:<img src={viewRequest} style={{width:'2vw'}}/>,
        component:<ViewRequest/>
    }
]

export default routes;