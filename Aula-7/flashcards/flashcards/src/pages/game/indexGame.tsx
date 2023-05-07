import './styleGame.css'
import {Link} from "react-router-dom"

const Game = () => {
    return(
        <>
            <h1>Game</h1>
            <Link to="/dashboard">Sair [X]</Link>
        </>
    )
}

export default Game;