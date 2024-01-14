import './Offer.css'
export default function Offer(){
    return(
        <div className='offers'>
             <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>Only for best sellers products</p>
                <button>Check now</button>
             </div>
             <div className="offers-right">
                <img src={'images/10.jpg'} alt="" style={{width:'200px',height:'200px'}} />
             </div>
        </div>
    )
}