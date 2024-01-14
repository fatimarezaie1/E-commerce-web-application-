import React, { useContext } from 'react'
import './Navbar.css'
import Cart from '../../../public/images/Cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export default function Navbar(){
    const[menu,setMenu] = React.useState("shop")
    const {getTotalCartItem} = useContext(ShopContext);

    return(
        <div className='navbar'>
              <div className='nav-logo'>
                <img src={'images/Cart1.png'} alt="" />
                <p>Shooper</p>
              </div>
              <ul className="nav-menue">
                <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu('mens')}}><Link to='/mens'>Men</Link>{menu === "mens" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu('womens')}}><Link to='/womens'>Women</Link>{menu === "womens" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu('kids')}}><Link to='kids'>Kids</Link>{menu === "kids" ? <hr/> : <></>}</li>
              </ul>
              <div className="nav-login-cart">
                    <Link to='/login'> <button>Login</button></Link>
                    <Link to='/cart'><img src={Cart} alt="" /></Link>  
                    <div className="nav-cart-count">{getTotalCartItem()}</div>
              </div>
        </div>
    )
}