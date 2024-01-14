import React, { useContext } from 'react';
import './ProductDisplay.css'
import Fivestar from '../../../public/images/Fivestar.png'
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product} = props;
    const{addToCart} = useContext(ShopContext)
    return(
        <div className='productdisplay'>
           <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.img} alt="some image" />
                <img src={product.img} alt="some image" />
                <img src={product.img} alt="some image" />
                <img src={product.img} alt="some image" />
            </div>
            <div className="productdisplay-img">
                <img src={product.img} alt="main-image" className='productdisplay-main-img'/>
            </div>
           </div>
           <div className="productdisplat-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={Fivestar} alt="star" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="producedisplay-right-desc">
                Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to
                search online for the video that best fits your document
             </div>
             <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>X</div>
                    <div>XX</div>
                </div>
             </div>
             <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
             <p className='productdisplay-right-category'><span>Category: </span>Women , T-Shirt , Crop Top</p>
             <p className='productdisplay-right-category'><span>TAgs: </span>Modern Latest </p>

           </div>
        </div>
        
    )
}

export default ProductDisplay