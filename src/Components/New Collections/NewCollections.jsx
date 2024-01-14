
import './NewCollections.css'
import {new_collections} from '../Assets/data'
import Item from '../Item/Item'
export default function NewCollections(){
    return(
        <div className='newCollections'>
            <h1>NWE COLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item ,i) =>{
                    return <Item key={i} id={item.id} name={item.name} 
                    img={item.img} new_price={item.new_price} old_price={item.old_price} />

                })}
            </div>
        </div>
    )
}