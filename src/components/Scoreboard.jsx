import { useState, useEffect } from 'react'
import '../styles/scoreboard.css'

function Scoreboard( {score, bestScore} ) {
    return (
        <>
            <header>

                <h1>Pokemon Memory Game</h1>

                <ul>
                    <li>
                        Current score
                        <h2>{score}</h2>
                    </li>
                    <li>
                        Best score
                        <h2>{bestScore}</h2>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Scoreboard;
