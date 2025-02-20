import { useState } from 'react';
import React,{createContext}from "react";

import all_product from '../Components/Assets/all_product';
export const ShopContext=createContext(null);

const getDefaultcart=()=>{
    let cart={};
    for(let index=0;index<all_product.length+1;index++){
       cart[index]=0;
    }
    return cart;

  }

const ShopContextProvider=(props)=>{

const[cartItems,setCartItems]=useState(getDefaultcart());


const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItems);

}

const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

}

const gettotalcartitem=()=>{
let totalitem=0;
for(const item in cartItems){
    if(cartItems[item]>0){
        totalitem+=cartItems[item];
    }
}
return totalitem;
}
const contextValue={all_product,cartItems,addToCart,removeFromCart,gettotalcartitem};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;