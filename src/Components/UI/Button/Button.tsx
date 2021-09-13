import React from "react";
import classes from "./Button.module.css";

export type buttonPropsType = {
  type: "button" | "submit" | "reset" | undefined
  title: string
  onClick?: () => void
  isDisabled: boolean
}

export function Button(props: buttonPropsType) {

  return (
    <button
      className={classes.button}
      type={props.type}
      disabled={props.isDisabled}
      onClick={props.onClick}>{props.title}</button>
  )
}