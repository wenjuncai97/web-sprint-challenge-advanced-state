import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchQuiz, postAnswer, selectAnswer} from '../state/action-creators'

export function Quiz(props) {

  const {quiz, selectAnswer, selectedAnswer, postAnswer, fetchQuiz} = props;

  useEffect(() => {
    fetchQuiz();
  }, []);

  return (
    <div id="wrapper">
      { quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}

export default connect(mapStateToProps, {fetchQuiz, postAnswer, selectAnswer})(Quiz);