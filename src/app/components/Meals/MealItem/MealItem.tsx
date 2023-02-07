import MealItemForm from "../MealItemForm/MealItemForm";

/* eslint-disable-next-line */
export interface MealItem {
    name: string,
    price: number,
    description: string
}

export function MealItem(props: MealItem) {
    const price = `$${props.price.toFixed(2)}`
    return (
        <li className="flex justify-between mx-4 my-4 pb-2 border-b-2 border-[#ccc]">
            <div>
                <div><h3 className="mb-1 font-bold">{props.name}</h3></div>
                <div className="italic">{props.description}</div>
                <div className="mt-1 font-bold text-[#ad5502] text-[1.25rem]">{price}</div>
            </div>
            <div>
                <MealItemForm/>
            </div>
        </li>);
}

export default MealItem;
