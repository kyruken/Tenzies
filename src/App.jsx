import React from 'react'
import Die from './assets/Die'
import './App.css'

function App() {
  const [dice, setDice] = React.useState([])
  return (
    <div>
      <div className="tenzies">
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
      </div>

    </div>
  )
}

export default App
