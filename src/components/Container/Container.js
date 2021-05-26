import React from 'react';
import './Container.css';
import VedomySS from '../../images/project_img/vedomyscreenshot.png';

export default function Container() {
  return (
<div class="container-main">
  <div className="vedomy-mobile" tabindex="0">
    <div className ="vmobile-inner">
        <div className="vmobile-front">
            <img src={VedomySS} alt="Vedomy"/>
            <a className="projectlink" href="https://gushihiro.github.io/vedomy" target="_blank"><h1>vedomý</h1></a>
        </div>
        <div className="vmobile-back">
            <h2 id="vedomytitle">vedomý</h2>
            <br/>
            <p>
                Vedomý is an ambitious mood tracking application that provides local storage tracking of daily mood logs while providing random inspirational quotes and an
                animated box to assist with sequential breathing. Along with daily quotes, Vedomý also provides a healthy recipe of the day, a spotify widget for calming music, 
                sleep tips based on user input, and daily yoga poses.
            </p>
            <p>
                <a className="mobilelink" href="https://github.com/Gushihiro/Vedomy">GitHub Link</a>
                <br/>
                <a className="mobilelink" href="https://gushihiro.github.io/vedomy" target="_blank">vedomý</a>
            </p>
        </div>
    </div>
  </div>
</div>
)
}
