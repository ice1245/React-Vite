import Input from "../../UI/Input/input";
import classes from "./meal-item-form.module.scss";
/* eslint-disable-next-line */
export interface MealItemForm {}

export function MealItemForm(props: MealItemForm) {
    return (
        <form className={classes.form}>
            <Input label='Amount' input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ Add</button>
        </form>);
}

export default MealItemForm;
