
import { useContext, useState } from 'react'
import { all_data } from '../Assets/data'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import iconcancel from '../Assets/images/iconcancel.png'
export default function CartItem(){
    const{all_data,cartItem,removeFromCart,getTotalCartAmount} = useContext(ShopContext)
    return(
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Titles</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_data.map((e) =>{
                if(cartItem[e.id]>0){
                    return <div>
                    <div className="cartitems-format cartitems-format-main ">
                        <img src={e.img} alt=""  className='carticon-product-icon'/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                        <p>${e.new_price * cartItem[e.id]}</p>
                        <img src={iconcancel} className='cartitem-remove-icon' alt="" onClick={()=>{removeFromCart(e.id)}} />
                    </div>
                    <hr />
                </div>
                }
                return null;
            })}
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitem-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitem-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Procced To Checkout</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='promo code ' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}