import {decode} from 'html-entities';

export default function Question(props) {

  let i=0;

  const optionsButtons = props.options.map(optionText=>{

    i++

    return (
      <button
        key={i} 
        className="options-button" 
        type="button"
        value={optionText}
        onClick={(event)=>{
            props.handleClickChoice(props.id,event.target.value)
        }}
      >
        {optionText}
      </button>
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


