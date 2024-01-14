import './hero.css'
export default function Hero(){
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>New Arivales Only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={'images/17.jpg '} alt="" /> 
                    </div>
                    <p>Collections </p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={'images/Cart1.png'} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={'images/support.png'} alt="" />
            </div>
        </div>
    )
}