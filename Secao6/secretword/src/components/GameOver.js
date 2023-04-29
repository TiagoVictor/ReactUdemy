import './GameOver.css'

const GameOver = ({ retry }) => {
    return(
        <div>
            <h1>Fim de jogo</h1>
            <button onClick={retry}>Recomeçar</button>
        </div>
    )
}

export default GameOver;