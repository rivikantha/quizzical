import { useState , useEffect } from 'react'
import './App.css'
import {data} from "./assets/data.js"
import Question from "./Question"
import { nanoid } from 'nanoid'

console.log(data)

function App() {

	const [gameStarted, setGameStarted] = useState(false)
	const [questionsData, setQuestionsData] = useState(null)

	useEffect(()=>{
		setQuestionsData(

			data.map(question=>{
				
				let options = question.incorrectAnswers.map(a=>a)
				options.push(question.correctAnswer)

				let shuffledOptions = createChoices(options)

				return {
					...question,
					id:nanoid(),
					answerChoice:"",
					options:shuffledOptions
				}
			})

		)
	},[])

  /**
   * Create answer options 
   * 
   * This function takes the correct answer and wrong answers array and shuffle them and create random options 
   * for the player to shoose from
   * 
   * @param optionsArray an array of answer texts including the correct answer
   * 
   * @return suffledArray the array with shuffled answers including the correct answer
   */
  function createChoices(optionsArray){
    let currentIndex = optionsArray.length
    let shuffledArray = []

    while(currentIndex != 0){
      let i = Math.floor(Math.random() * currentIndex--)
      shuffledArray.push(optionsArray.splice(i,1)[0])
    }

	return shuffledArray
  }

  /**
   * A Function to handle selecting a choice 
   */

   function handleClickChoice(id,answerChoice){
      //console.log(id,answerChoice)
      setQuestionsData(oldQuestions=>{
        const newQuestions = oldQuestions.map(question=>{
        	if(id == question.id){
				return {...question, answerChoice:answerChoice}
			}else{
				return question
			}
          
        })

		console.log(newQuestions)

		return newQuestions

      })

   }

  const questions = questionsData?.map((question)=>{   

    return (
      <Question
        key={question.id}
        id={question.id}
        questionText={question.question}
        options = {question.options}
        correctAnswer={question.correctAnswer}
        answerChoice={question.answerChoice}
        handleClickChoice={handleClickChoice}
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
          <div className="questions-container">
            {questions}
          </div>
          <button className="button">Check Answers</button>
        </div>
      }
      
    </main>
  )
}

export default App
