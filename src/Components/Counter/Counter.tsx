import React from 'react';
import classes from "./Counter.module.css";
import {Button} from "../UI/Button/Button";
import {outputModeType} from "../../App";

export type counterPropsType = {
  value: number
  minValue: number
  maxValue: number
  outputMode: string
  onIncreaseValue: () => void
  onResetValue: () => void
}

export function Counter(props: counterPropsType) {
  let setWarningMessage = (outputMode: string)=> {
    return outputMode === "ERROR" ? "Invalid input!!!" : outputMode === "SET" ? "Enter values and press SET" : "";
  }

  const warningMessage = setWarningMessage(props.outputMode);
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