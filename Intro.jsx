import React, { useContext, useEffect, useState } from 'react'
import "./Intro.css"
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Banner from "../../img/header-img.svg"
import { FlotingDiv } from '../FlotinhDiv/FlotingDiv';
import { themeContext } from "../../Context";
import { motion } from 'framer-motion';
import { Typewriter } from "react-simple-typewriter";
import Arpit from '../../img/ProfileArpit2.png'
import 'react-toastify/dist/ReactToastify.css';
const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 2, type: 'spring' };
    useEffect(() => {
        document.title = "Arpit Portfolio"
    });

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }} >Hello! I Am</span>
                    <span>Arpit Nirvan
                    </span>
                    <span style={{ color: darkMode ? 'white' : '' }}>My Main Technologies</span>
                    <span style={{ color: darkMode ? 'lightblue' : '' }}>
                        <Typewriter
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={150}
                            deleteSpeed={100}
                            delaySpeed={1000}
                            words={['Cloud Computing.', 'Web Development. ', 'Digital Marketing.'
                                , 'React Js']}
                        />
                    </span>
                </div>
                <div className="i-icons">
                    <a href='https://github.com/arpitnirvan07' target="_blank">
                        <img src={Github} alt="" />
                    </a>
                    <a href='https://www.linkedin.com/in/arpit-nirvan-8041b0192/details/skills/' target="_blank">
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href='https://www.instagram.com/arpit_nirvan_07/' target="_blank">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                {/*<img src={Vector1} alt="" />*/}
                {/*<img src={Vector2} alt="" />*/}
                <motion.img src={Arpit}
                    className="i-right-profile"
                    initial={{ left: "-36%" }}
                    whileInView={{ left: ""}}
                    transition={transition}
                />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji} alt="" />
                <motion.div
                    initial={{ top: '40%' }}
                    whileInView={{ top: '-16%' }}
                    transition={transition}
                    style={{ top: '-4.5%', left: '68%' }} >
                    <FlotingDiv image={crown} txt1='Cloud' txt2='Computing' ></FlotingDiv></motion.div>

                <motion.div
                    initial={{ left: '54%' }}
                    whileInView={{ left: '10%' }}
                    transition={transition}
                    style={{ top: '18rem', left: '0rem' }} >
                    <FlotingDiv image={thumbup} txt1='Web' txt2='Development' ></FlotingDiv>
                </motion.div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }} > </div>
                <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '15rem',
                    left: '-9rem',
                    height: '11rem'
                }}
                ></div>
            </div>
        </div>
    )
}

export default Intro