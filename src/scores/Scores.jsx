import { useState } from 'react'

const [playerScore, setPlayerScore] = useState(0)
const [computerScore, setComputerScore] = useState(0)
const [drawCounter, setDrawCounter] = useState(0)

export function increaseScore ({ winner }) {
  if (winner === 'player') {
    setPlayerScore(playerScore + 1)
  } else if (winner === 'computer') {
    setComputerScore(computerScore + 1)
  } else {
    setDrawCounter(drawCounter + 1)
  }
  return (
    <div className='score'>
      <p>Player score: {playerScore}</p>
      <p>Draws: {drawCounter}</p>
      <p>Computer score: {computerScore}</p>
    </div>
  )
}
