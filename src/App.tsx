import React, {useEffect, useReducer, useState} from 'react';
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

export type startDataType = {
  minValue: number
  maxValue: number
  outputMode: string
}
export type outputModeType = "DEFAULT" | "SET" | "ERROR";
export type stateType = {
  maxValue: number
  minValue: number
  value: number
  outputMode: outputModeType
}

export function App() {
  const [state, dispatchToReducer] = useReducer(stateReducer, {
    maxValue: 7,
    minValue: 0,
    value: 0,
    outputMode: "DEFAULT",
  })

  useEffect(()=>{
    let currentValue = localStorage.getItem('startData');
    if (currentValue) {
      let newValue = JSON.parse(currentValue);
      getToLocalStorage(newValue);
      // setValue(newValue.value);
      // setMinValue(newValue.minValue);
      // setMaxValue(newValue.maxValue);
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
    dispatchToReducer(getToLocalStorageAC(data));
    // setState({
    //   ...state,
    //   value: data.value,
    //   minValue: data.minValue,
    //   maxValue: data.maxValue,
    // })
  }

  const increaseValueHandler = () => {
    dispatchToReducer(increaseValueAC());
    // setState({...state, value: state.value + 1});
  }
  const resetValueHandler = () => {
    dispatchToReducer(resetValueAC());
    // setState({...state, value: state.minValue});
  }
  const setStartValuesHandler = (startData: startDataType) => {
    dispatchToReducer(setStartValuesAC(startData));
  //   setState({
  //     ...state,
  //     minValue: startData.minValue,
  //     maxValue: startData.maxValue,
  //     value: startData.minValue,
  //     outputMode: startData.outputMode,
  // }
// );
}
const changeOutputModeHandler = (message: outputModeType) => {
    dispatchToReducer(changeOutputsAC(message));
  // setState({
  //   ...state,
  //   outputMode: message,
  // });
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