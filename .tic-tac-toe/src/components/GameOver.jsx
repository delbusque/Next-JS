export default function GameOver({ winner, restartGame, isDraw }) {
    console.log(winner);

    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It&apos;s a draw!</p>}
            <p>
                <button onClick={restartGame}>Rematch!</button>
            </p>
        </div>
    );
}