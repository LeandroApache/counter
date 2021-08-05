import React from 'react';
import classes from "./Counter.module.css";
import {Button} from "../UI/Button/Button";

export type counterPropsType = {
  value: number
  minValue: number
  maxValue: number
  warningMessage: string
  onIncreaseValue: () => void
  onResetValue: () => void
}

export function Counter(props: counterPropsType) {

  return (
    <div className={classes.counter}>
      <div className={`${classes.counterOutput} ${props.value === props.maxValue && classes.max}`}>
        {props.warningMessage
          ? <div
            className={`${classes.counterWarning} ${props.warningMessage === "Invalid input!!!" ? classes.error : ""}`}>
            {props.warningMessage}
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