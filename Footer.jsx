import React, { useContext, useEffect, useState } from 'react'
import "./Footer.css";
import Wave from "../../img/footer-bg.png";
import Wave2 from "../../img/Footer2.jpg"
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Gmail from '@iconscout/react-unicons/icons/uil-envelope-minus'
import Github from '@iconscout/react-unicons/icons/uil-github';
import { themeContext } from "../../Context";
const Footer = () => {
    const [image, setImage] = useState();
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    useEffect(() => {
        if (darkMode === false) {
            setImage(require('../../img/Footer2.jpg'));
        } else {
            setImage(require('../../img/footer-bg.png'));
        }
    })
    return (
        <div className="footer" >
            <img src={image} style={{ width: '100%' }} />
            <div className="f-content">
                <div className="f-icons" >
                    <a href='https://www.instagram.com/arpit_nirvan_07/' target="_blank">
                        <Insta color='#C13584' size='3rem' />
                    </a>
                    <a href='https://github.com/arpitnirvan07' target="_blank">
                        <Github color='#61DAFB' size='3rem' />
                    </a>
                    <a href='https://www.facebook.com/arpit.nirvan' target="_blank">
                        <Facebook color='Blue' size='3rem' />
                    </a>
                    <a href="mailto:arpitnirvan7@gmail.com">
                        <Gmail color={'red'} size={'3rem'} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer