import { useContext } from "react";
import {Outlet,Navigate} from "react-router-dom"
import { UserContext } from "../Context/user";

const ProtectedRoutes = () => {

    const {couldLogin} = useContext(UserContext);

    const allowAccess = couldLogin;

    return allowAccess ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoutes;