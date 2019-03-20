import { connect } from "react-redux";

import Counter from "./Counter";
import { AppState } from "./reducer";
import { Dispatch } from "redux";
import { setCounter } from "./actions";

const mapState = (state: AppState) => {
  return {
    counter: state.counter
  }
}

const mapAction = (dispatch: Dispatch) => {
  return {
    setCounter: (counter: number) => {
      dispatch(setCounter(counter))
    }
  }
}

export default connect(mapState, mapAction)(Counter);
