import {decode} from 'html-entities';

export default function Question(props) {

  return (
    <div className="question-container">
      <h1>{decode(props.questionText)}</h1>
      <hr/>
    </div>
  )
}


