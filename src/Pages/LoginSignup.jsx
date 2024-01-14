
import './css/LoginSignup.css'

export default function LoginSignup(){
    return(
        <div className="loginsignup">
            <div className="loginsignup-container  ">
                <h1>Sign Up</h1>
                <div className="loginsignuo-feilds">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue </button>
                <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continue, I agree to the terms ot use & privacy policy.</p>
                </div>
            </div> 
        </div>
    )
}