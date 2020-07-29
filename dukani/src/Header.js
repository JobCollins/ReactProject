import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider'

function Header() {
    //get the cart
    const [{ cart }] = useStateValue();

    console.log(cart);

    return (
        <nav className="header">
            {/* log on the left */}
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="https://img.favpng.com/24/8/14/naivas-limited-logo-brand-tuskys-product-png-favpng-R0uYxVwf8CHMGp5eHHrLh7Lrp.jpg" 
                />
            </Link>
            {/* search box */}
            <div className="header__search">
                <input type='text' className="header__searchInput" />  
                <SearchIcon className="header__searchIcon" />
            </div>
            
            {/* three links */}
            <div className="header__nav">
                <Link to='/login' className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello User</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to='/' className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to='/' className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>

            {/* cart icon */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* shopping cart icon */}
                    <ShoppingCartIcon />
                    {/* number of items in cart */}
                    <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
