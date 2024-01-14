import './NewsLetter.css'
export default function NewLetter(){
    return(
        <div className='newsLetter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscirbe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email Id'/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}