import './styleDashboard.css'
import {Link} from "react-router-dom"

const Dashboard = () => {
    return(
        <>
            <h1>Dashboard</h1>
            <Link to="/game">JOGAR!</Link>
        </>
    )
}

export default Dashboard;