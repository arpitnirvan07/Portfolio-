import React, { useContext } from 'react'
import './Service.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { Card } from '../Card/Card';
import { themeContext } from "../../Context";
import { motion } from 'framer-motion';
import Resume from '../../Resume/Resume.pdf'

const Service = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="Service">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }} >My Amazing</span>
        <span>Services.</span>
        <span>
          Languages :- Java,JavaScript,Python,C/C++.
          <br />
          DataBase :- MYSQL.
          <br />
          Other :- HTML,CSS,BootStrap.
          <br />
          Communication :- English , Hindi.
        </span>
        <div className="blur" style={{ background: "rgb(238 210 255)", left: "-4rem" }} > </div>
        <a href={Resume} target={"_blank"}>
          <button className="button s-button"  >Resume</button>
        </a>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ top: '-30%', left: '112px' }}
          whileInView={{ top: '', left: '112px' }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={'Book Written'}
            detail={"Written book on Cyber-Security"}
            link={"https://www.appleacademicpress.com/advancements-in-cyber-crime-investigation-and-digital-forensics-/1119"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "680px" }}
          whileInView={{ left: "580px" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={'Ide & Tools'}
            detail={"Intellij IDEA, VsCode,Google Quick Labs etc.."}
            link={"https://www.jetbrains.com/lp/intellij-frameworks/"}
          />
        </motion.div>

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={'Operating System'}
            detail={"Currently Working on Ubuntu 22.4 ."}
            link={"https://ubuntu.com/"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Service;
