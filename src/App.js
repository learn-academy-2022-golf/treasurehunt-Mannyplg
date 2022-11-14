import React, { useState } from "react"
import "./App.css"
import Square from './components/Square'

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
        {board.map((value, index) => 
          <Square
           value={value}
            key={index}
           />
          )
        }
      </div>
    </>
  )
}

export default App
