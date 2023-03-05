import { useState } from 'react'
import './App.css'

const OPTIONS = ['rock', 'paper', 'scissors']

function App () {
  const [playerChoice, setPlayerChoice] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [drawCounter, setDrawCounter] = useState(0)

  const computerSelection = () => {
    const selection = Math.floor(Math.random() * 3)
    return OPTIONS[selection]
  }

  const increaseScore = (win) => {
    if (win === 'player') {
      setPlayerScore(p => p + 1)
    } else if (win === 'computer') {
      setComputerScore(c => c + 1)
    } else {
      setDrawCounter(d => d + 1)
    }
  }
  function checkWinner () {
    const selection = computerSelection()

    if (selection === playerChoice) {
      const winnerAux = 'draw'
      return winnerAux
    }
    if (selection === 'rock') {
      const winnerAux = playerChoice === 'paper' ? 'player' : 'computer'
      return winnerAux
    } else if (selection === 'paper') {
      const winnerAux = playerChoice === 'scissors' ? 'player' : 'computer'
      return winnerAux
    } else if (selection === 'scissors') {
      const winnerAux = playerChoice === 'rock' ? 'player' : 'computer'
      return winnerAux
    }
  }
  const resetGame = () => {
    setPlayerChoice(0)
    setComputerScore(0)
    setPlayerScore(0)
    setDrawCounter(0)
  }
  const handleClick = (choice) => {
    setPlayerChoice(choice)
    const win = checkWinner()
    increaseScore(win)
  }
  return (
    <main>
      <div className='player-options'>
        <button onClick={() => handleClick(OPTIONS[0])}><img src='src/images/rock.png' alt='Rock' />
        </button>
        <button onClick={() => handleClick(OPTIONS[1])}><img src='src/images/paper.png' alt='Paper' />
        </button>
        <button onClick={() => handleClick(OPTIONS[2])}><img src='src/images/scissors.png' alt='Scissors' />
        </button>
      </div>
      <div className='score'>
        <p>Player score: {playerScore}</p>
        <p>Draws: {drawCounter}</p>
        <p>Computer score: {computerScore}</p>
      </div>
      <div className='reset'>
        <button onClick={resetGame}>Reiniciar juego</button>
      </div>
    </main>
  )
}

export default App
