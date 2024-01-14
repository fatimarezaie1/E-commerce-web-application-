 
import { Link } from 'react-router-dom'
import './Item.css'
export default function Item(props){
    return(
        <div className='Item'>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.img} style={{width:'200px', height:'300px'}} /></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
 }