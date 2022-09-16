import React from 'react'
import Die from './assets/Die'
import './App.css'
import {nanoid} from 'nanoid'

function App() {
  const [dice, setDice] = React.useState(createDice())

  function createDice() {
    const newDice = [{}]
    for (let x = 0; x < 10; x++) {
     newDice[x] = {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      key: nanoid()
    };
    }
    return newDice;
  }

  function holdDie(dieId) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === dieId ?  die.isHeld = !die.isHeld : die
    }))
  }

  console.log(dice)
  const diceElements = dice.map(die => {
    return <Die value={die.value} key={die.key} holdDie={holdDie} id={die.key} isHeld={die.isHeld}/>
  })

  return (
    <div>
      <div className="tenzies">
        {diceElements}
      </div>

    </div>
  )
}

export default App
