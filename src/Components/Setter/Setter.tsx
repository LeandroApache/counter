import React, {ChangeEvent, FormEvent, useState} from 'react';
import classes from "./Setter.module.css";
import {Button} from "../UI/Button/Button";
import {outputModeType, startDataType} from "../../App";

export type setterPropsType = {
  onSetStartData: (startData: startDataType) => void
  onChangeMessage: (message: outputModeType) => void
}

export function Setter(props: setterPropsType) {
  const [minValue, setMinValue] = useState<string>("");
  const [maxValue, setMaxValue] = useState<string>("");
  const [maxInputError, setMaxInputError] = useState<boolean>(false);
  const [minInputError, setMinInputError] = useState<boolean>(false);

  const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value <= 0 || +maxValue !== 0 && +e.currentTarget.value >= +maxValue) {
      setMinInputError(true);
      props.onChangeMessage("ERROR");
    } else {
      setMinInputError(false);
      if (!maxInputError) {
        props.onChangeMessage("SET");
      }
    }
    setMinValue(e.currentTarget.value);
  }
  const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value <= 0 || +minValue !== 0 && +e.currentTarget.value <= +minValue) {
      setMaxInputError(true);
      props.onChangeMessage("ERROR");
    } else {
      setMaxInputError(false);
      if (!minInputError) {
        props.onChangeMessage("SET");
      }
    }
    setMaxValue(e.currentTarget.value);
  }

  const addNewStartDataHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newStartData = {
      minValue: +minValue,
      maxValue: +maxValue
    }
    props.onSetStartData(newStartData);
    props.onChangeMessage("DEFAULT");
  }

  return (
    <div className={classes.setter}>
      <form onSubmit={addNewStartDataHandler}>
        <div className={classes.setterBody}>
          <div className={classes.setterActions}>
            <label htmlFor="startVal">start value:</label>
            <input className={minInputError ? classes.error : ""} id={"startVal"} type="number" value={minValue}
                   onChange={changeMinValueHandler}/>
            <label htmlFor="maxVal">max value:</label>
            <input className={maxInputError ? classes.error : ""} id={"maxVal"} type="number" value={maxValue}
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