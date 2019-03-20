import { Action, Reducer } from "redux";
import { SET_COUNTER, SetCounterAction, SET_COUNTER_2 } from "./actions";

export interface AppState {
  counter: number;
  counter2: number;
}

const intialState: AppState = {
  counter: 0,
  counter2: 100,
}

const counterReducer: Reducer<AppState, Action> = (state = intialState, action: Action) => {
  switch (action.type) {
    case SET_COUNTER:
      return {
        ...state,
        counter: (action as SetCounterAction).payload.counter,
      }
      break;
    case SET_COUNTER_2:
      return {
        ...state,
        counter2: (action as SetCounterAction).payload.counter,
      }
      break;

    default:
      return state;
      break;
  }
}
export default counterReducer;
