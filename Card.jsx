import React from 'react'
import './Card.css';
export const Card = ({emoji,heading,detail,link}) => {
  return (
      <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <a href={link} target="_blank">
        <button className="c-button">Learn More</button>
        </a>
      </div>
  )
}
