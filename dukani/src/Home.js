import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://www.amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_2x._CB431858162_.jpg" 
                alt=""
            />

            {/* Product id, title, price, rating, image  */}
            <div className="home__row">
                <Product 
                    id="1234"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={1100}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />

                <Product 
                    id="1234"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={1100}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="1234"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={1100}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />

                <Product 
                    id="1234"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={1100}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />

                <Product 
                    id="1234"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={1100}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
            </div>
            
            <div className="home__row">
                <Product 
                    id="1234"
                    title="The Lean Startup: How Constant Innovation Creates"
                    price={1100}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
            </div>
            
            {/* product  */}
        </div>
    )
}

export default Home
