import React from 'react'
import "./Navbar.css";
import Toogle from '../Toggle/Toogle';
import { Link } from 'react-scroll/modules';
const Navbar = () => {
    return (
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="n-name">Arpit</div>
                <Toogle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }} >

                        <Link spy={true} smooth={true} to="Navbar" >
                            <li>Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Service" >
                            <li>Service</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Experience" >
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Framework" >
                            <li>Frameworks</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Projects" >
                            <li>Projects</li>
                        </Link>
                    </ul>
                </div>
                {/*<button className="button">*/}
                {/*    Contact*/}
                {/*</button>*/}
            </div>

        </div>
    )
}

export default Navbar