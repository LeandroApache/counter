import React, {useEffect, useReducer} from 'react';
import {Setter} from "./Components/Setter/Setter";
import {Counter} from "./Components/Counter/Counter";
import "./App.css";
import {
  changeOutputsAC, getToLocalStorageAC,
  increaseValueAC,
  resetValueAC,
  setStartValuesAC,
  stateReducer
} from "./Components/Store/state-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Components/Store/store";

export type startDataType = {
  minValue: number
  maxValue: number
  outputMode: outputModeType
}
export type outputModeType = "DEFAULT" | "SET" | "ERROR";
export type stateType = {
  maxValue: number
  minValue: number
  value: number
  outputMode: outputModeType
}

export function App() {
  const dispatch = useDispatch();

  let state = useSelector<AppRootStateType,stateType>(state=>state.counter);

  useEffect(()=>{
    let currentValue = localStorage.getItem('startData');
    if (currentValue) {
      let newValue = JSON.parse(currentValue);
      getToLocalStorage(newValue);
    }
  }, []);

  useEffect(()=>{
    let startData = {
      minValue: state.minValue,
      maxValue:state.maxValue,
      value: state.value,
    }
    localStorage.setItem('startData', JSON.stringify(startData));
  }, [state.value]);

  const getToLocalStorage = (data: {value: number, minValue: number, maxValue: number})=> {
    dispatch(getToLocalStorageAC(data));
  }

  const increaseValueHandler = () => {
    dispatch(increaseValueAC());
  }
  const resetValueHandler = () => {
    dispatch(resetValueAC());
  }
  const setStartValuesHandler = (startData: startDataType) => {
    dispatch(setStartValuesAC(startData));
}
const changeOutputModeHandler = (message: outputModeType) => {
    dispatch(changeOutputsAC(message));
}
return (
  <div className={'App'}>
    <Setter
      onSetStartData={setStartValuesHandler}
      onChangeMessage={changeOutputModeHandler}/>
    <Counter
      value={state.value}
      maxValue={state.maxValue}
      minValue={state.minValue}
      outputMode={state.outputMode}
      onIncreaseValue={increaseValueHandler}
      onResetValue={resetValueHandler}/>
  </div>
)
}