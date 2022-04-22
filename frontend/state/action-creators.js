import axios from 'axios'
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM
} from './action-types'


export function moveClockwise() {
  return {type: MOVE_CLOCKWISE}
 }

export function moveCounterClockwise() {
  return {type: MOVE_COUNTERCLOCKWISE}
 }

export function selectAnswer(id) {
  return {type: SET_SELECTED_ANSWER, payload: id}
 }

export function setMessage(message) { 
  return {type: SET_INFO_MESSAGE, payload: message}
}

export function setQuiz(quiz) { 
  return {type: SET_QUIZ_INTO_STATE, payload: quiz}
}

export function inputChange(change) { 
  return {type: INPUT_CHANGE, payload: change}
}

export function resetForm() {
  return {type: RESET_FORM}
 }

export function fetchQuiz() {
  return function (dispatch) {
    axios.get(`http://localhost:9000/api/quiz/next`)
    .then(res => {
      console.log(res.data)
      dispatch(setQuiz(res.data))
    })
    .catch(err => 
      console.error(err))
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
