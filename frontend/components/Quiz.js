import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchQuiz, postAnswer, selectAnswer} from '../state/action-creators'

export function Quiz(props) {

  const {quiz, selectAnswer, selectedAnswer, postAnswer, fetchQuiz} = props;

  useEffect(() => {
    fetchQuiz();
  }, []);

  const handleClick = (id) => {
    selectAnswer(id);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postAnswer({
      quiz_id: quiz.quiz_id,
      answer_id: selectedAnswer,
    })
  }

  return (
    <div id="wrapper">
      { quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`${selectedAnswer === quiz.answers[0].answer_id ? "answer selected" : "answer"}`}>
                {quiz.answers[0].text}
                <button onClick={() => handleClick(quiz.answers[0].answer_id)}>
                  {selectedAnswer === quiz.answers[0].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className={`${selectedAnswer === quiz.answers[1].answer_id ? "answer selected": "answer"}`}>
                {quiz.answers[1].text}
                <button onClick={() => handleClick(quiz.answers[1].answer_id)}>
                  {selectedAnswer === quiz.answers[1].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button 
            id="submitAnswerBtn"
            disabled={!selectedAnswer}
            onClick={handleSubmit}
            >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    answer_id: state.answer_id
    
  }
}

export default connect(mapStateToProps, {fetchQuiz, postAnswer, selectAnswer})(Quiz);