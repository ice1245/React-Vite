import classes from "./input.module.scss";
import React from "react";
/* eslint-disable-next-line */
export interface Input {
    input:any,
    label:string
}
export function Input(props: Input,ref:any){
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    );
}

export default React.forwardRef(Input);
