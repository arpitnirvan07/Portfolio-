import React, { useContext } from "react";
import "./Work.css";
import Upwork from "../../img/icons8-react-120.png";
import Fiverr from "../../img/icons8-github-120.png";
import Amazon from "../../img/google.png";
import Shopify from "../../img/cut.png";
import Facebook from "../../img/icons8-mysql-logo-120.png";
import cloudComputing from "../../img/cloud-service.png";

import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="Framework">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? 'white' : '' }}  >
            Primary
          </span>
          <span>Frameworks</span>
          <span>
            My Primary Framework are ReactJS / BootStrap
            <br />
            <br />
            For Cloud Computing I mainly use Google Quick Labs.
            <br />
          </span>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={cloudComputing} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;