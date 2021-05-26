import React from 'react';
import './About.css';
import gitIcon from '../../images/githubicon.jpg';
import linkedinIcon from '../../images/linkedinlogoglowy.jpg';
import resumeIcon from '../../images/resumeicon.jpg';
import twitterIcon from '../../images/Twitterlogoglowy.jpg';

export default function About({ image, hyperlink, altText }) {
  return (
    <div className = "container">
      <div className = "about">
        <div id = "about">
          <h2>About Me</h2>
          <br/>
          <p>
              I'm Hiroto Robinson
          </p>
          <br/>
          <p>
              A Seattle-based Full-Stack Web Developer passionate about finding elegant solutions to simple & complex problems.
          </p>
          <br/>
          <p>
              My goal is to bring consistent creative energy to the table in any situation to thrive in fast-paced environments
              requiring many hats.
          </p>
          <br/>
          <p>
              I have an inextinguishable thirst for knowledge and love challenging myself in order to open doors to a plethora of possibilities and opportunities.
          </p>
        </div>
        <div className = "tech">
          <h3>React</h3>
          <h3>HTML | CSS | JavaScript</h3>
          <h3>jQuery</h3>
          <h3>GitHub | git | Express </h3>
          <h3>mySQL | Sequelize | MongoDB</h3>
          <h3>Bootstrap | Materialize</h3>
          <h3>Handlebars</h3>
        </div>
        <div className = "social">
          <a href="https://github.com/Gushihiro" target="_blank"><img src={gitIcon} alt="github"/></a>
          <a href="https://www.linkedin.com/in/robinsonhiroto/" target="_blank"><img src={linkedinIcon} alt="linkedin"/></a>
          <a href="https://twitter.com/gushihiro" target="_blank"><img src={twitterIcon} alt="twitter"/></a>
          <a href="/docs/Hiroto_Robinson_Resume.pdf" target="_blank"><img src={resumeIcon} alt="Resume"/></a>
        </div>
      </div>
    </div>
  )
}
