import { Action, Reducer } from "redux";
import { SET_COUNTER, SetCounterAction } from "./actions";

export interface AppState {
  counter: number;
}

const intialState: AppState = {
  counter: 0,
}

const counterReducer: Reducer<AppState, Action> = (state = intialState, action: Action) => {
  switch (action.type) {
    case SET_COUNTER:
      return {
        ...state,
        counter: (action as SetCounterAction).payload.counter,
      }
      break;

    default:
      return state;
      break;
  }
}
export default counterReducer;
