import Input from "../../UI/Input/Input";
import classes from "./meal-item-form.module.scss";
import {useEffect, useRef, useState} from "react";
/* eslint-disable-next-line */
export interface MealItemForm {
    onAddToCart:any
}


export function MealItemForm(props: MealItemForm) {
    const [amountIsValid,setAmountIsValid] = useState(true)
    const amountInputRef:any = useRef()

    function submitHandler (event:any){
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNum = +enteredAmount
        if(enteredAmount.trim().length === 0 ||
            enteredAmountNum < 1 || enteredAmountNum >5 ){
            setAmountIsValid(false)
            return
        }
        props.onAddToCart(enteredAmountNum)
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label='Amount'
               ref={amountInputRef}
               input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount ( 1-5 ).</p>}
        </form>);
}

export default MealItemForm;
