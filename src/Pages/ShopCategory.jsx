
import { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { all_data } from '../Components/Assets/data.jsx'
import Item from '../Components/Item/Item'
export default function ShopCategory(props){
    const{all_data} = useContext(ShopContext)
    return(

        <div className="shop-Category">
            <img src={props.banner} className='shopcategory-banner' />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className='shopcategory-sort'>
                    Sort by <img src={'images/DropDown.png'} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_data.map((item, i)=>{
                    if(props.category === item.category){
                    return <Item key={i} id={item.id} name={item.name} 
                    img={item.img} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore more
            </div>
        </div>
    )
}