import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'

function Checkout() {
    const [{ cart }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg"/>   
                {cart?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Cart is empty</h2>
                        <p>You have no items in your cart. To buy one or more items, click "Add to Cart" next to the item</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Cart</h2>
                        {/* list items  */}
                        {cart.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price} 
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {cart.length > 0 && (
                <div className="checkout__right">
                    {/* <h1>Stuff</h1> */}
                    <Subtotal />
                </div>
        )}
        </div>
    )
}

export default Checkout
