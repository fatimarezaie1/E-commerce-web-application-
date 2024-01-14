
import './Populer.css'
import {data_product} from '../Assets/data'
import Item from '../Item/Item'
export default function Populer(){
    return(
        <div className="populer">
            <h1>POPULER IN WOMEN</h1>
            <hr />
            <div className="populer_item">
                {data_product.map((item,i) =>{
                    return <Item key={i} id={item.id} name={item.name} 
                    img={item.img} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}