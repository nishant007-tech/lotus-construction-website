import React from 'react';
import { Link } from 'react-router-dom';
import constructionLogo from '../pictures/logo.jpeg';
function Navbar() {

    const menubarHandler = () => {
        if (document.getElementById("modal").style.display === 'none') {
            document.getElementById("modal").style.display = 'block';
        } else {
            document.getElementById("modal").style.display = 'none';
        }
    }
    const hidePopup = () => {
        document.getElementById("modal").style.display = 'none';
    }
    return (
        <>

            <div className="navBar">
                <div className="header">
                    <span>Call Us Today! +91-8091096501 | info@lotusconstructions.in</span>
                </div>
                <div className="navContent">
                    <span className="logo">
                        <img alt="LOGO" src={constructionLogo} />
                        <p> <span id="letter1"> Lotus </span> <br /><span id="letter2"> Construction</span></p>
                    </span>
                    <ul>
                        <Link to='/' >
                            <li> HOME</li>
                        </Link>
                        <Link to="/about">
                            <li>ABOUT</li>
                        </Link>
                        <Link to="/services">
                            <li>SERVICES</li>
                        </Link>
                        <Link to="/contact-us">
                            <li>CONTACT US</li>
                        </Link>
                        <Link to="/e-market">
                            <li>E-MARKET</li>
                        </Link>
                        <Link to="/publish-requirement">
                            <li>SELL</li>
                        </Link>

                    </ul>
                    <i onClick={menubarHandler} className=" menuicon fa fa-bars"></i>
                </div>
            </div >
            <div style={{ display: 'none' }} id="modal">
                <ul>
                    <Link to='/' onClick={hidePopup}>
                        <li> HOME</li>
                    </Link>
                    <Link to="/about" onClick={hidePopup}>
                        <li>ABOUT</li>
                    </Link>
                    <Link to="/services" onClick={hidePopup}>
                        <li>SERVICES</li>
                    </Link>
                    <Link to="/contact-us" onClick={hidePopup}>
                        <li>CONTACT US</li>
                    </Link>
                    <Link to="/e-market">
                            <li>E-MARKET</li>
                        </Link>
                    <Link to="/publish-requirement" onClick={hidePopup}>
                        <li>CONTACT US</li>
                    </Link>

                </ul>
            </div>
        </>
    );
}

export default Navbar;
