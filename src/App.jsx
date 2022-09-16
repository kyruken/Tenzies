import React from 'react'
import Die from './assets/Die'
import './App.css'
import {nanoid} from 'nanoid'

function App() {
  const [dice, setDice] = React.useState(createDice())

  function createDice() {
    const newDice = [{}]
    for (let x = 0; x < 10; x++) {
     newDice[x] = generateNewDie();
    }
    return newDice;
  }

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid()
    }
  }

  console.log(dice)
  function holdDie(dieId) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === dieId ?  {...die, isHeld: !die.isHeld} : die
    }))
  }

  function rollDice() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? die : generateNewDie();
    }))
  }

  const diceElements = dice.map(die => {
    return <Die value={die.value} key={die.key} holdDie={() => holdDie(die.id)} id={die.key} isHeld={die.isHeld}/>
  })

  return (
    <div>
      <div className="tenzies-container">
        <div className="dice-layout">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>Roll</button>
      </div>
    </div>
  )
}

export default App
