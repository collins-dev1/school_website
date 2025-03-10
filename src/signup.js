import {Link} from "react-router-dom";

const Signup = () => {
    return ( 
        <div className="signup-main">
            <div className="signup-text">
                <h1>Hello!</h1>
                <p>Welcome to OG COLLINS College</p>
            </div>
            <div className="signup-container">
                <h3>Register</h3>
                <div>
                    <input type="text" className="form-control" placeholder="Full Name"/>
                </div>
                <div>
                    <input type="tel" className="form-control" placeholder="Phone Number"/>
                </div>
                <div>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div>
                    <input type="date" className="form-control" placeholder="Date of Birth"/>
                </div>
                <div>
                    <select className="form-control">
                        <option selected disabled>--Select your Gender--</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div>
                    <input type="text" className="form-control" placeholder="Home Address"/>
                </div>
                <div>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="signup-button">
                    <button>Register</button>
                </div>
                <div className="logining">
                    <span>Already have an Account? <Link>Login</Link></span>
                </div>
            </div>
        </div>
     );
}
 
export default Signup;