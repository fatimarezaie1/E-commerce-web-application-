import React, { createContext, useState } from 'react'

import './ShopContext.css'
import {all_data} from '../Components/Assets/data'
 
export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for(let index=0 ; index < all_data.length + 1 ; index++){
        cart[index] = 0;
    }
    return cart;
}

export default function ShopContextProvider(props){

    const [cartItem,setCartItem]= useState(getDefaultCart());
    
    // Add to cart 
    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItem);
    }
    // Remove from cart 
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    // total Amount
    const getTotalCartAmount= () =>{
        let totalAmount = 0;
        for(const item in cartItem){
           if(cartItem[item] > 0){
                let itemInfo = all_data.find((product)=>product.id === Number(item))
                totalAmount+= itemInfo.new_price*cartItem[item]
           }
           
        }
        return totalAmount;
    }

    // Total cart item 
    const getTotalCartItem = () => {
        let totalItem = 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                totalItem+= cartItem[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItem,getTotalCartAmount,all_data,cartItem,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
