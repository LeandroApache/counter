import React, {useEffect, useState} from 'react';
import {Setter} from "./Components/Setter/Setter";
import {Counter} from "./Components/Counter/Counter";
import "./App.css";

export type startDataType = {
  minValue: number
  maxValue: number
}
export type outputModeType = "DEFAULT" | "SET" | "ERROR";

export function App() {
  const [maxValue, setMaxValue] = useState(7);
  const [minValue, setMinValue] = useState(0);
  const [value, setValue] = useState<number>(minValue);
  const [outputMode, setOutputMode] = useState<outputModeType>("DEFAULT");


  useEffect(()=>{
    let currentValue = localStorage.getItem('startData');
    if (currentValue) {
      let newValue = JSON.parse(currentValue);
      setValue(newValue.value);
      setMinValue(newValue.minValue);
      setMaxValue(newValue.maxValue);
    }
  }, []);
  useEffect(()=>{
    let startData = {
      minValue,
      maxValue,
      value
    }
    localStorage.setItem('startData', JSON.stringify(startData));
  }, [value]);

  let warningMessage = "";
  if (outputMode === "ERROR") {
    warningMessage = "Invalid input!!!"
  }
  if (outputMode === "SET") {
    warningMessage = "Enter values and press SET";
  }

  const increaseValueHandler = () => {
    setValue(value + 1);
  }
  const resetValueHandler = () => {
    setValue(minValue);
  }
  const setStartValuesHandler = (startData: startDataType) => {
    setMaxValue(startData.maxValue);
    setMinValue(startData.minValue);
    setValue(startData.minValue);
  }

  const changeOutputModeHandler = (message: outputModeType) => {
    setOutputMode(message);
  }
  return (
    <div className={'App'}>
      <Setter onSetStartData={setStartValuesHandler} onChangeMessage={changeOutputModeHandler}/>
      <Counter
        value={value}
        maxValue={maxValue}
        minValue={minValue}
        warningMessage={warningMessage}
        onIncreaseValue={increaseValueHandler}
        onResetValue={resetValueHandler}/>
    </div>
  )
}