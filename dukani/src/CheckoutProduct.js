import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, title, image, price, rating}) {
    const[{ cart }, dispatch] = useStateValue();
    const removeFromCart = () => {
        //remove from cart
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} className="checkoutProduct__image" alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>Kes</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))
                    }
                </div>

                <button onClick={removeFromCart}>Remove from cart</button> 
            </div>
        </div>
    )
}

export default CheckoutProduct
