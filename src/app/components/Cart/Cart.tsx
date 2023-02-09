import classes from "./cart.module.scss";
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";
import cartItem from "./CartItem/CartItem";
/* eslint-disable-next-line */
export interface Cart {
    onClose:any
}

export function Cart(props: Cart) {
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    function cartItemAddHandler(item:any){
        cartCtx.addItem({...item,amount:1})

    }
    function cartItemRemoveHandler(id:any){
        cartCtx.removeItem(id)
    }

    const cartItems = <ul className={classes['cart-items']}> {cartCtx.items.map((item:any) => <CartItem
        key={item.id} name={item.name}
        amount={item.amount} price={item.price}
        onRemove={cartItemRemoveHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler.bind(null,item)}
    ></CartItem>)}</ul>

    const hasItem = cartCtx.items.length > 0

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['buttonAlt']} onClick={props.onClose}>Close</button>
                {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>)
}

export default Cart;
