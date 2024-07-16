import { useState } from 'react'
import './App.css'

function App() {
  const [gameStarted, setGameStarted] = useState(false) 

  return (
    <main>
      {
        !gameStarted ? 
        
        <div id="intro-page">
          <h1 className="game-title">Quizzical</h1>
          <p className="game-description">Quizzical is a fun game with random MCQs. Select answers, get instant results, and test your knowledge on various subjects!</p>
          <button className="button" onClick={()=>setGameStarted(oldState=>!oldState)} >Start Quiz</button>
        </div>  
        
        : 
          
        <div id="game-page">
          
        </div> 

      }

        

      
      
    </main>
  )
}

export default App
