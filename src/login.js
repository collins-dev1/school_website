import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login-main">
            <div className="login-text">
                <h1>Hello!</h1>
                <p>Welcome to OG COLLINS College</p>
            </div>
            <div className="login-container">
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
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;