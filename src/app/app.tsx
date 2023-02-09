    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    import Header from './components/Layout/header/Header';
    import {Fragment, useState} from "react";
    import Meals from "./components/Meals/Meals";
    import Cart from './components/Cart/Cart';
    import CartProvider from "./store/cart-provider";


    function App() {
        const [cartIsShown, setCartIsShown] = useState(false);
        function showCartHandler(){
            setCartIsShown(true)
        }
        function hideCartHandler(){
            setCartIsShown(false)
        }
        return (
            <CartProvider>
                {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
                <Header onShowCart={showCartHandler}/>
                <main>
                    <Meals/>
                </main>
            </CartProvider>
        );
    }

    export default App;
