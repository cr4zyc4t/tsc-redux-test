import { Action, Reducer } from "redux";
import { CounterAction } from "./actions";

export interface AppState {
  counter: number;
  counter2: number;
}

const intialState: AppState = {
  counter: 0,
  counter2: 100,
}

const counterReducer: Reducer<AppState, CounterAction> = (state = intialState, action: CounterAction) => {
  switch (action.type) {
    case "set-counter-1":
      return {
        ...state,
        counter: action.payload.counter,
      }
      break;
    case "set-counter-2":
      return {
        ...state,
        counter2: action.payload.counter,
      }
      break;

    default:
      return state;
      break;
  }
}
export default counterReducer;
