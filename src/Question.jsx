import {decode} from 'html-entities';

export default function Question(props) {

  const optionsButtons = props.options.map(optionText=>{

    return (
      <button className="options-button" type="button">{optionText}</button>
    )
  })

  return (
    <div className="question-container">
      <h1 className="qeustion">{decode(props.questionText)}</h1>
      <div className="options-container">        
        {optionsButtons}
      </div>
      <hr/>
    </div>
  )
}


