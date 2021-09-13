import {outputModeType, startDataType, stateType} from "../../App";

export type increaseValueAT = {
  type: "INCREASE_VALUE"
}
export type resetValueAT = {
  type: "RESET_VALUE"
}
export type setStartValuesAT = {
  type: "SET_START_VALUES"
  startData: startDataType
}
export type changeOutputsAT = {
  type: "CHANGE_OUTPUT"
  message: outputModeType
}
export type getToLocalStorageAT = {
  type: "GET_TO_LOCAL_STORAGE"
  data: { value: number, minValue: number, maxValue: number }
}

export type stateReducerActionType =
  increaseValueAT
  | resetValueAT
  | setStartValuesAT
  | changeOutputsAT
  | getToLocalStorageAT;


let initialState : stateType = {
  maxValue: 7,
  minValue: 0,
  value: 0,
  outputMode: "DEFAULT",
}
export const stateReducer = (state: stateType = initialState, action: stateReducerActionType): stateType => {
  switch (action.type) {
    case "INCREASE_VALUE":
      return {...state, value: state.value + 1};
    case "RESET_VALUE":
      return {...state, value: state.minValue};
    case "SET_START_VALUES":
      return {
        ...state,
        minValue: action.startData.minValue,
        maxValue: action.startData.maxValue,
        value: action.startData.minValue,
        outputMode: action.startData.outputMode,
      }
    case "CHANGE_OUTPUT":
      return {
        ...state,
        outputMode: action.message,
      }
    case "GET_TO_LOCAL_STORAGE":
      return {
        ...state,
        value: action.data.value,
        minValue: action.data.minValue,
        maxValue: action.data.maxValue,
      }
    default :
      return state;
  }
}
export const increaseValueAC = (): increaseValueAT => {
  return {
    type: "INCREASE_VALUE"
  }
}
export const resetValueAC = (): resetValueAT => {
  return {
    type: "RESET_VALUE"
  }
}
export const setStartValuesAC = (startData: startDataType): setStartValuesAT => {
  return {
    type: "SET_START_VALUES",
    startData
  }
}
export const changeOutputsAC = (message: outputModeType): changeOutputsAT => {
  return {
    type: "CHANGE_OUTPUT",
    message
  }
}
export const getToLocalStorageAC = (data: { value: number, minValue: number, maxValue: number }): getToLocalStorageAT => {
  return {
    type: "GET_TO_LOCAL_STORAGE",
    data
  }
}
