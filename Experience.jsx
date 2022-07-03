import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='Experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" >4</div>
        <span style={{ color: darkMode ? 'white' : '' }} >B.Tech</span>
        <span>Year</span>
      </div>
      <div className="achievement">
        <div className="circle" >4</div>
        <span style={{ color: darkMode ? 'white' : '' }} >completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">1</div>
        <span style={{ color: darkMode ? 'white' : '' }} >companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;