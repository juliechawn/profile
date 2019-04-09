import React from "react";
import "./App.css";
import resume from "./images/resume.png";
import email from "./images/email.png";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import julie2 from "./images/julieforedit2.png";
import arrow from "./images/arrow.png";
import { NavLink } from "react-router-dom";


class AppHome extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="about">
          <div className="col picture">
            <img className="julie" src={julie2} alt="julie" />
          </div>
          <div className="col bio">
            <nav>
              <div className="nav-div">
              <NavLink className="anchor" to="/work">
                <span className="nav-name">WORK</span>
                <img className="arrow" src={arrow} alt="arrow" />
                </NavLink>
              </div>
            </nav>
            <div className="bio-div">
              <p className="name-p">JULIE HAWN</p>
              <p className="subtitle-p">
                Full-Stack JavaScript Developer experienced in multiple
                languages, libraries and platforms.
              </p>
              <p className="about-p">
                I started coding when I curated the content for a museum’s new
                website. Even though I could only customize simple lines of HTML
                and CSS, I loved making pictures and words change on the screen.
              </p>
              <p className="about-p">
                I create responsive and sophisticated applications so they work
                seamlessly and look great. I am always working on fun projects
                to learn new technologies and skills. Recently, I created an API
                with AWS AppSync, S3 and GraphQL.
              </p>
              <div className="skills-div">
                <p>
                  JavaScript • Node.js • React/Redux • React Native • MongoDB •
                  GraphQL • AWS • CSS • HTML
                </p>
              </div>
              <div className="contact-buttons">
                <a className="anchor" href="mailto:juliechawn@gmail.com?Subject=Hello%20">
                  <img
                    className="icon"
                    src={email}
                    rel="noopener noreferrer"
                    alt="email"
                  />
                </a>
                <a className="anchor"
                  href="https://www.linkedin.com/in/julie-cappa-hawn-07609435/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={linkedin} alt="linkedin" />
                </a>
                <a className="anchor"
                  href="https://github.com/juliechawn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={github} alt="github" />
                </a>
                <a className="anchor" href="/files/JulieHawnResume.pdf" download>
                  <img
                    className="icon"
                    src={resume}
                    rel="noopener noreferrer"
                    alt="resume"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHome;
