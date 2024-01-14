
import './Footer.css'
import iconsphone from '../../../public/images/iconsphone.png'
export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={'images/Cart1.png'} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-socials-icon">
                <div className="footer-icons-container">
                    <img src={iconsphone} alt="instagram" />
                </div>
                <div className="footer-icons-container">
                    <img src={iconsphone} alt="pintester" />
                </div>
                <div className="footer-icons-container">
                    <img src={iconsphone} alt="whatsapp" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved </p>
            </div>
        </div>
    )
}