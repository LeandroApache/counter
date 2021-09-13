import {
  changeOutputsAC,
  getToLocalStorageAC,
  increaseValueAC,
  resetValueAC,
  setStartValuesAC,
  stateReducer
} from "./state-reducer";
import {outputModeType, startDataType, stateType} from "../../App";

let initialState: stateType = {
  maxValue: 0,
  minValue: 0,
  value: 0,
  outputMode: "DEFAULT"
};

beforeEach(()=>{
  initialState = {
    maxValue: 5,
    minValue: 1,
    value: 1,
    outputMode: "DEFAULT",
  }
})

test("value should be increased", () => {
  let action = increaseValueAC();
  let resultState = stateReducer(initialState, action);
  expect(resultState.value).toBe(2);
  expect(resultState.maxValue).toBe(5);
  expect(resultState.minValue).toBe(1);
  expect(resultState.outputMode).toBe("DEFAULT");
})
test("min value after reset should be equal to value", () => {
  let action = resetValueAC();
  let resultState = stateReducer(initialState, action);
  expect(resultState.value).toBe(resultState.minValue);
  expect(resultState.maxValue).toBe(5);
  expect(resultState.minValue).toBe(1);
  expect(resultState.outputMode).toBe("DEFAULT");
})
test("new start values should be added", () => {
  let startValues: startDataType = {
    maxValue: 14,
    minValue: 3,
    outputMode: "SET"
  }
  let action = setStartValuesAC(startValues);
  let resultState = stateReducer(initialState, action);
  expect(resultState.value).toBe(3);
  expect(resultState.maxValue).toBe(14);
  expect(resultState.minValue).toBe(3);
  expect(resultState.outputMode).toBe("SET");
})
test("property outputMode should be changed", () => {
  let newModeValue : outputModeType= "ERROR";
  let action = changeOutputsAC(newModeValue);
  let resultState = stateReducer(initialState, action);
  expect(resultState.value).toBe(1);
  expect(resultState.maxValue).toBe(5);
  expect(resultState.minValue).toBe(1);
  expect(resultState.outputMode).toBe("ERROR");
})
test("correct values chould be changed", () => {
  let newData = {
    value: 14,
    minValue: 10,
    maxValue: 15,
  }
  let action = getToLocalStorageAC(newData);
  let resultState = stateReducer(initialState, action);
  expect(resultState.value).toBe(14);
  expect(resultState.maxValue).toBe(15);
  expect(resultState.minValue).toBe(10);
  expect(resultState.outputMode).toBe("DEFAULT");
})

