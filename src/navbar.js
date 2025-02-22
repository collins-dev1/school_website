import my_image from "./asset/ogcollinscollegemain.png";
import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [navlink, setNavlink] = useState(false);

    const changeNavlink = () => {
        if(window.scrollY >= 80){
            setNavlink(true);
        }
        else{
            setNavlink(false);
        }
    };

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }
        else{
            setNavbar(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", changeNavlink);
        return () => {
            window.removeEventListener("scroll", changeNavlink);
        }
    }, []);

    return ( 
        <nav className={navbar ? "navba navbar-active" : "navba"}>
            <div className="nav-logo">
                <Link to="/">
                <img src={my_image} width="100px" height="100px"/>
                </Link>
            </div>
            <div className={navlink ? "nav-link nav-link-active" : "nav-link"}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="">Contact Us</Link></li>
                    <li><Link to="">Blog</Link></li>
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
        </nav>
     );
}
 
export default Navbar;