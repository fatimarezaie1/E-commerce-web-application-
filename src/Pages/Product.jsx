import React,{ useContext } from "react"
import { all_data } from "../Components/Assets/data"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom";
import BreadCrums from "../Components/Bread crums/BreadCrums";
import ProductDisplay from "../Components/productdisplay/ProductDisplay";
import DescriptionBox from "../Components/Description Box/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";


export default function Product(){ 
    const{all_data} =useContext(ShopContext);
    const{productId} =useParams();
    const  product = all_data.find((e)=> e.id === Number(productId))
    return(
        <div>
            <BreadCrums product={product} />
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}