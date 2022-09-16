import React from 'react'
import Die from './assets/Die'
import './App.css'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = React.useState(createDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    let tempValue = dice[0].value
    const allIsHeld = dice.every(die => die.isHeld === true)
    const allSameNumber = dice.every(die => tempValue === die.value)
    if (allIsHeld === true && allSameNumber === true) {
      setTenzies(true)
      console.log("you won!")
    }

  }, [dice])

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
    if (tenzies === true) {
      setTenzies(false)
      setDice(createDice())
    }
    else {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? die : generateNewDie();
      }))
    }
  }

  const diceElements = dice.map(die => {
    return <Die value={die.value} key={die.key} holdDie={() => holdDie(die.id)} id={die.key} isHeld={die.isHeld}/>
  })

  return (
    <div>
      <div className="tenzies-container">
        {tenzies && <Confetti />}
        <h1>Tenzies</h1>
        <p className="instruction-text">Roll until all dice are the same. Click each die to freeze
          it at its current value between rolls.
        </p>
        <div className="dice-layout">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      </div>
    </div>
  )
}

export default App
