import {Link} from "react-router-dom";

const Signup = () => {
    return ( 
        <div className="signup-main">
            <div className="signup-text">
                <h1>Hello!</h1>
                <p>Welcome to OG COLLINS College</p>
            </div>
            <div className="signup-container">
                <h3>Login</h3>
                <div>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div>
                    <Link>Forget Password</Link>
                </div>
                <div>
                    <button>Register</button>
                </div>
            </div>
        </div>
     );
}
 
export default Signup;