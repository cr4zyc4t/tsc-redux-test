import { ActionCreator } from "redux";

export interface PayloadedAction<AType, APayload> {
  type: AType;
  payload: APayload;
}

interface SetCounterActionPayload {
  counter: number
}

export interface SetCounterAction extends PayloadedAction<"set-counter-1", SetCounterActionPayload> { };
export interface SetCounter2Action extends PayloadedAction<"set-counter-2", SetCounterActionPayload> { };

export type CounterAction = SetCounterAction | SetCounter2Action;

export const setCounter: ActionCreator<SetCounterAction> = (newCount: number) => {
  return {
    type: "set-counter-1",
    payload: {
      counter: newCount,
    }
  } as SetCounterAction;
}

export function setCounter2(newCount: number): SetCounter2Action {
  return {
    type: "set-counter-2",
    payload: {
      counter: newCount,
    }
  };
}


