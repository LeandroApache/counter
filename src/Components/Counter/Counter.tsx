import React from 'react';
import classes from "./Counter.module.css";
import {Button} from "../UI/Button/Button";
import {outputModeType} from "../../App";

export type counterPropsType = {
  value: number
  minValue: number
  maxValue: number
  outputMode: outputModeType
  onIncreaseValue: () => void
  onResetValue: () => void
}

export function Counter(props: counterPropsType) {

  let warningMessage = "";
  if (props.outputMode === "ERROR") {
    warningMessage = "Invalid input!!!"
  }
  if (props.outputMode === "SET") {
    warningMessage = "Enter values and press SET";
  }

  return (
    <div className={classes.counter}>
      <div className={`${classes.counterOutput} ${props.value === props.maxValue && classes.max}`}>
        {warningMessage
          ? <div
            className={`${classes.counterWarning} ${warningMessage === "Invalid input!!!" ? classes.error : ""}`}>
            {warningMessage}
          </div>
          : <div>{props.value}</div>
        }
      </div>
      <div className={classes.counterControls}>
        <Button
          type={"button"}
          title={"Increase"}
          isDisabled={props.value === props.maxValue}
          onClick={props.onIncreaseValue}
        />
        <Button
          type={"button"}
          title={"Reset"}
          isDisabled={props.value === props.minValue}
          onClick={props.onResetValue}/>
      </div>
    </div>
  )
}