import React from 'react'
import CurrencyFormat from "react-currency-format"
import "./Subtotal.css"
import { useStateValue } from './StateProvider'
import { getTotal } from './reducer';

function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                Subtotal ({cart.length} items): <strong>{` ${value} `}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Kes"}
            />
            <button>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal
