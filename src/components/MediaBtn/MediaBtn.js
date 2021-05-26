import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function MediaBtn({ image, hyperlink, altText }) {
  const location = useLocation();
  return (
    <div>
      <Link
        to={hyperlink}
        className={location.pathname === hyperlink ? "social-link active" : "social-link"}
        target = "_blank"
      >
        <img src = {image} alt = {altText} className = "social-btn"></img>
      </Link>
    </div>
  )
}
