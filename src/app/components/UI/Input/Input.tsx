import classes from "./input.module.scss";
/* eslint-disable-next-line */
export interface Input {
    input:any,
    label:string
}
export function Input(props: Input) {
  return(
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/*<h1>hello</h1>*/}
        <input {...props.input}/>
    </div>
  );
}

export default Input;
