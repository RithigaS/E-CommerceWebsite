import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react'
const ProductDisplay = (props) => {
    const{product}=props;
     const{addToCart}=useContext(ShopContext);



  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
<div className='productdisplay-img-list'>
<img src={product.image} alt=""/>
<img src={product.image} alt=""/>
<img src={product.image} alt=""/>
<img src={product.image} alt=""/>
</div>
<div className='productdisplay-image'>
    <img className='product-displat-main-img' src={product.image} alt='' />
</div>
      </div>
      <div className='productdisplay-right'>
<h1>{product.name}</h1>
<div className='productdisplay-right-star'>
    <img src={star_icon} alt=''/>
    <img src={star_icon} alt=''/>
    <img src={star_icon} alt=''/>
    <img src={star_icon} alt=''/>
    <img src={star_dull_icon} alt=''/>
    <p>(122)</p>
</div>
<div className='productdisplay-right-price'>
 <div className="productdisplay-right-price-old">
${product.old_price}
 </div>
 <div className="productdisplay-right-price-new">
${product.new_price}
 </div>
</div>
<div className='productdisplay-right-discription'>
A soft, breathable, and versatile fabric that comes from the cotton plant. It's used to make clothing, bedding, and more. 
A lightweight, breathable, and durable fabric that comes from the flax plant. It's used to make clothing, bedding, and more. 
</div>

<div className='productdisplay-right-size'>
    <h1>Select Size</h1>
    <div className='productdisplay-right-size'>
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
    </div>
</div>
<button className='cart-btn' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
<p className='productdisplat-right-category'><span>Category:</span>Women,T-Shirt,Crop Top</p>
<p className='productdisplat-right-category'><span>Tags:</span>Modern,Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
