import React from 'react';
import './Container2.css';
import ouiCircleSS from '../../images/project_img/ouicirclesscreenshot.png';

export default function Container2() {
  return (
  <div className="container-main2">
    <div className="circle-mobile" tabindex="0">
      <div className ="cmobile-inner">
          <div className="cmobile-front">
              <img src={ouiCircleSS} alt="ouiCircle" />
      <a className="projectlink" href="http://oui-circle-app.herokuapp.com" target="_blank"><h1>ouiCircle</h1></a>
          </div>
          <div className="cmobile-back">
              <h2 id="ouicirclestitle">ouiCircle</h2>
              <p>
                  A community bulletin application with geospatial ip tracking to render nearby event cards to the user. 
                  The goal of the project was to offer users an opportunity to engage with their community without having to search extensively.
                  From volunteer service to pick up basketball games, ouiCircle provides listings of events within a 30 mile radius and user authentication on it's community 
                  board.
              </p>
              <p>
                  <a className="mobilelink" href="https://github.com/Gushihiro/ouiCircles-Community-Bulletin">GitHub Link</a>

                  <br/>
                  <a className="mobilelink" href="http://oui-circle-app.herokuapp.com" target="_blank">ouiCircle</a>
              </p>
          </div>
      </div>
    </div>
  </div>
)
}
