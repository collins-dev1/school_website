import my_image from "./asset/ogcollinscollegemain.png";
// import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navba fixed-top">
            <div className="nav-logo">
                <img src={my_image} width="100px" height="100px"/>
            </div>
            <div className="nav-link">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div className="nav-button">
                <a href="">
                    <button>Login</button>
                </a>
                <a href="">
                    <button>Register</button>
                </a>
            </div>
        </div>
     );
}
 
export default Navbar;