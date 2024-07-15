import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div id="intro-page">
        <h1 className="game-title">Quizzical</h1>
        <p className="game-description">Quizzical is a fun game with random MCQs. Select answers, get instant results, and test your knowledge on various subjects!</p>
        <button className="button">Start Quiz</button>
      </div>
    </main>
  )
}

export default App
