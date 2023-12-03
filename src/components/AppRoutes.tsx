import { Route, Routes} from "react-router-dom";
import RosterDetails from "../pages/RosterDetails";
import Formation from "../pages/Formation";

export default function AppRoutes()
{
    
    return(
        <>
            <Routes>
                <Route path="/" element={<RosterDetails/>}/>
                <Route path="/formation" element={<Formation/>}/>
            </Routes>
        </>
    );
}