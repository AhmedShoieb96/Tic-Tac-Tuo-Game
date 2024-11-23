export default function GameOver({winner , onRestart}){

    return(
        <div id="game-over">
            <h2>Game Over !!</h2>
           {winner &&<p>{winner} is won..</p>}
           {!winner && <p>NO winner ?!</p>}
            <p><button onClick={onRestart}>Rematch..?</button></p>

        </div>
    )
}