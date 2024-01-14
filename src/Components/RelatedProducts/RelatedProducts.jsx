import './RelatedProducts.css'
import { all_data } from '../Assets/data'
import Item from '../Item/Item'
export default function RelatedProducts(){
    return(
        <div className='relatedProducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {
                    all_data.map((item, i)=>{
                        return <Item key={i} id={item.id} name={item.name} 
                        img={item.img} new_price={item.new_price} old_price={item.old_price} />

                    })
                }
            </div>
        </div>
    )
}