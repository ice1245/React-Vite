import CardIcon from "../CardIcon/CardIcon";
import classes from "./header-card-button.module.scss";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../../store/cart-context";

/* eslint-disable-next-line */
export interface HeaderCardButtonProps {
    onClick:any
}

export function HeaderCardButton(props: HeaderCardButtonProps) {
    const cartCtx = useContext(CartContext)
    const [btnIsHigh,setBtnIsHigh] = useState(false)
    const btnClasses = `btn bg-[#4d1601] rounded-full py-2 px-8 flex
       justify-around hover:bg-[#2c0d00] active:bg-[#2c0d00] ${btnIsHigh ? classes.bump : ''}`
    const { items } = cartCtx

    useEffect(()=> {
        if (items.length === 0){
            return
        }

        setBtnIsHigh(true)

        const timer = setTimeout(()=>{
            setBtnIsHigh(false)
        },300)

        return ()=>{
            clearTimeout(timer)
        }
    },[items])

    const numberOfCartItem = cartCtx.items.reduce((currentNumber, item:any ) =>{
    return currentNumber + item.amount
    },0)

  return (
      <button className={btnClasses} onClick={props.onClick}>
          <span className={classes.icon}>
              <CardIcon/>
          </span>
          <span className="font-bold">Your Cart</span>
          <span className="bg-[#b94517] px-4 ml-4 rounded-full font-bold hover:bg-[#92320c] active:bg-[#92320c]">{numberOfCartItem}</span>
      </button>
  );
}

export default HeaderCardButton;
