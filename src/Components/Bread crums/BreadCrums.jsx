
import './BreadCrums.css'
export default function BreadCrums(props){
    const {product} = props;
    return(
        <div className='breadcrum'>
            HOME <img src={product.img} alt="" /> SHOP <img src={'images/2.jpg'} alt="" /> {product.category} <img src={'images/4.jpg'} alt="" /> {product.name}
        </div>

    )
}