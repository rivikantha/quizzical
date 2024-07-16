import { useState , useEffect } from 'react'
import './App.css'
import data from "./assets/data.js"
import Question from "./Question"

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [questionsData, setQuestionsData] = useState(data)

  useEffect(()=>{
    setQuestionsData(data)
  },[gameStarted])

  const questions = questionsData.map((question)=>{
    return (
      <Question 
        questionText={question.question}
      />
    )
  })


  return (
    <main>
      {
        !gameStarted ? 

        <div id="intro-page">
          <h1 className="game-title">Quizzical</h1>
          <p className="game-description">Quizzical is a fun game with random MCQs. Select answers, get instant results, and test your knowledge on various subjects!</p>
          <button 
            className="button"
            onClick={()=>setGameStarted(oldState=>!oldState)}
          >
            Start Quiz
          </button>
        </div>

        :
        <div id="game-page">
          {questions}
        </div>
        

      }
      
    </main>
  )
}

export default App
