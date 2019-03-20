import { Action, ActionCreator } from "redux";

interface SetCounterActionPayload {
  counter: number
}

export interface SetCounterAction extends Action {
  payload: SetCounterActionPayload;
}

export const SET_COUNTER = "SET_COUNTER";
export const setCounter: ActionCreator<SetCounterAction> = (newCount: number) => {
  return {
    type: SET_COUNTER,
    payload: {
      counter: newCount,
    }
  } as SetCounterAction;
}

export const SET_COUNTER_2 = "SET_COUNTER_2";
export function setCounter2(newCount: number): SetCounterAction {
  return {
    type: SET_COUNTER_2,
    payload: {
      counter: newCount,
    }
  };
}
