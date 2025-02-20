import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  // 💡 Calculate Subtotal
  const subtotal = all_product.reduce((acc, product) => {
    return acc + product.new_price * (cartItems[product.id] || 0);
  }, 0);

  return (
    <div className='cartitems'>
      <div className='cartitem-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div className='cartitems-format' key={product.id}>
              <img src={product.image} alt={product.name} className='carticon' />
              <p>{product.name}</p>
              <p>${product.new_price}</p>
              <button className='quantity-btn'>{cartItems[product.id]}</button>
              <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
              <img
                src={remove_icon}
                onClick={() => removeFromCart(product.id)}
                alt='remove'
                className='remove-icon'
              />
            </div>
          );
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitem-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitem-total-item'>
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className='cartitem-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitem-total-item'>
              <h3>Total</h3>
              <h3>${subtotal.toFixed(2)}</h3>
            </div>
          </div>
          <button className='proceed-btn'>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-items-promo'>
          <p>If you have a promo code, enter it here!</p>
          <div className="cartitem-logo">
            <input type='text' placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
