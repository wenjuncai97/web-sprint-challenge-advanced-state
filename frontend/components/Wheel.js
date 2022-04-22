import React from 'react'
import { connect } from "react-redux";
import {moveClockwise, moveCounterClockwise} from '../state/action-creators'

const Wheel = props => {

  const { wheel, moveClockwise, moveCounterClockwise } = props;

  const handleClockwise = () => {
    moveClockwise();
  }

  const handleCounterClockwise = () => {
    moveCounterClockwise();
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div
          className={`${wheel === 0 ? "cog active" : "cog"}`}
          style={{ "--i": 0 }}
        >
          {wheel === 0 ? "B" : ""}
        </div>
        <div
          className={`${wheel === 1 ? "cog active" : "cog"}`}
          style={{ "--i": 1 }}
        >
          {wheel === 1 ? "B" : ""}
        </div>
        <div
          className={`${wheel === 2 ? "cog active" : "cog"}`}
          style={{ "--i": 2 }}
        >
          {wheel === 2 ? "B" : ""}
        </div>
        <div
          className={`${wheel === 3 ? "cog active" : "cog"}`}
          style={{ "--i": 3 }}
        >
          {wheel === 3 ? "B" : ""}
        </div>
        <div
          className={`${wheel === 4 ? "cog active" : "cog"}`}
          style={{ "--i": 4 }}
        >
          {wheel === 4 ? "B" : ""}
        </div>
        <div
          className={`${wheel === 5 ? "cog active" : "cog"}`}
          style={{ "--i": 5 }}
        >
          {wheel === 5 ? "B" : ""}
        </div>
      </div>
      <div id="keypad">
        <button onClick={handleCounterClockwise} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={handleClockwise} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    wheel: state.wheel
  }
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)