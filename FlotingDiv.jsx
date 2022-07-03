import React, { useContext } from "react";
import "./FlotingDiv.css"
import { themeContext } from "../../Context";
export const FlotingDiv = ({ image, txt1, txt2 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="flotingdiv" style={{ background: darkMode ? 'black' : '' }}>
      <img src={image} alt="" />
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  )
}
