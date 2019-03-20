import { connect } from "react-redux";

import Counter from "./Counter";
import { AppState } from "./reducer";
import { Dispatch } from "redux";
import { setCounter, setCounter2 } from "./actions";

const mapState = (state: AppState) => {
  return {
    counter: state.counter,
    counter2: state.counter2
  }
}

const mapAction = (dispatch: Dispatch) => {
  return {
    setCounter: (counter: number) => {
      dispatch(setCounter(counter))
    },
    setCounter2: (counter: number) => {
      dispatch(setCounter2(counter))
    }
  }
}

export default connect(mapState, mapAction)(Counter);
