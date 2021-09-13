import React, {ChangeEvent, FormEvent, useState} from 'react';
import classes from "./Setter.module.css";
import {Button} from "../UI/Button/Button";
import {outputModeType, startDataType} from "../../App";

export type setterPropsType = {
  onSetStartData: (startData: startDataType) => void
  onChangeMessage: (message: outputModeType) => void
}

export function Setter(props: setterPropsType) {
  const [currentMinValue, setCurrentMinValue] = useState<string>("");
  const [currentMaxValue, setCurrentMaxValue] = useState<string>("");
  const [maxInputError, setMaxInputError] = useState<boolean>(false);
  const [minInputError, setMinInputError] = useState<boolean>(false);

  const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value <= 0 || +e.currentTarget.value >= +currentMaxValue) {
      setMinInputError(true);
      props.onChangeMessage("ERROR");
    } else {
      setMinInputError(false);
      setMaxInputError(false);
      props.onChangeMessage("SET");
    }
    setCurrentMinValue(e.currentTarget.value);
  }
  const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value <= 0 || +e.currentTarget.value <= +currentMinValue) {
      setMaxInputError(true);
      props.onChangeMessage("ERROR");
    } else {
      setMaxInputError(false);
      setMinInputError(false);
      props.onChangeMessage("SET");
    }
    setCurrentMaxValue(e.currentTarget.value);
  }

  const addNewStartDataHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newStartData = {
      minValue: +currentMinValue,
      maxValue: +currentMaxValue,
      outputMode: "DEFAULT"
    }
    props.onSetStartData(newStartData);
  }

  return (
    <div className={classes.setter}>
      <form onSubmit={addNewStartDataHandler}>
        <div className={classes.setterBody}>
          <div className={classes.setterActions}>
            <label htmlFor="startVal">start value:</label>
            <input className={minInputError ? classes.error : ""} id={"startVal"} type="number" value={currentMinValue}
                   onChange={changeMinValueHandler}/>
            <label htmlFor="maxVal">max value:</label>
            <input className={maxInputError ? classes.error : ""} id={"maxVal"} type="number" value={currentMaxValue}
                   onChange={changeMaxValueHandler}/>
          </div>
          <div className={classes.setterControls}>
            <Button type={"submit"} title={"Set"} isDisabled={maxInputError || minInputError || false}/>
          </div>
        </div>
      </form>
    </div>
  )
}