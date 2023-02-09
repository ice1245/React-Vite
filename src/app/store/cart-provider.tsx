import React, {useReducer} from "react";
import CartContext from "./cart-context";

    export interface CartProvider{
        children:any
    }

    const defaultCartState = {
        items:[],
        totalAmount: 0
    }
    function cartReducer(state:any,action:any){
        if(action.type === 'ADD_ITEM'){
            const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount

            const existingCartItemIndex = state.items.findIndex((item:any)=> item.id === action.item.id)
            const existingCartItem = state.items[existingCartItemIndex]

            let updatedItems ;

            if(existingCartItem){
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            } else {
                updatedItems = state.items.concat(action.item)
            }

            return {
                items:updatedItems,
                totalAmount: updateTotalAmount
            }
        }

        if(action.type === 'REMOVE_ITEM'){
            const existingCartItemIndex = state.items.findIndex((item:any)=> item.id === action.id)
            const existingitem = state.items[existingCartItemIndex]
            const updatedTotalAmount = state.items.amount - existingitem.price
            let updatedItems;
            if(existingitem.amount === 1){
                updatedItems = state.items.filter((item:any) => item.id !== action.id)
            } else {
                const updatedItem = { ...existingitem, amount: existingitem.amount - 1}
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            }

            return {
                items:updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
        return defaultCartState;
    }

    export function CartProvider(props:CartProvider){
        const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);
        function addItemToCartHandler(item:unknown){
            dispatchCartAction({
                type:'ADD_ITEM',
                item:item
            })
        }
        function removeItemFromCartHandler(id:unknown){
            dispatchCartAction({
                type:'REMOVE_ITEM',
                id:id
            })
        }
        const cartContext = {
            items:cartState.items,
            totalAmount:cartState.totalAmount,
            addItem: addItemToCartHandler,
            removeItem: removeItemFromCartHandler
        }
        return(<CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>)
    }

export default CartProvider;