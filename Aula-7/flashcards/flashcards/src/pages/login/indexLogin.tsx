import { useContext } from 'react'
import './styleLogin.css'
import {Link} from "react-router-dom"
import { UserContext } from '../../Context/user'

const Login = () => {


    return(
        <>
            <h1>Login</h1>
            <Link to="/dashboard">ir para o Dashboard</Link>
        </>
    )
}

export default Login;