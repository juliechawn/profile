import React from "react";
import "./App.css";
import Trex from "./components/Trex/Trex";
import Weather from "./components/Weather/Weather";
import Got from "./components/Got/Got";
import arrow from "./images/arrow.png";
import { NavLink } from "react-router-dom";

class AppWork extends React.Component {
  render() {
    return (
      <div id="work">
        <nav className="work-nav-div">
          <NavLink className="anchor" to="/">
            <img className="arrow-work" src={arrow} alt="arrow" />
            <span className="nav-name">ABOUT</span>
          </NavLink>
        </nav>
        <div className="section-header">
          <p>Current project</p>
        </div>
        <div className="section-header-text">
          I was commissioned to create a lifestyle web app. I am building with
          React and using flexbox and media queries to create a responsive
          design. The CMS and API are developed with Strapi, MongoDB, and
          GraphQL.
          <p className="section-anchor">
            <a
              className="anchor"
              href="https://lr-site.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>VISIT SITE</span>
              <img className="arrow-visit" src={arrow} alt="arrow" />
            </a>
          </p>
        </div>
        <div className="section-header">
          <p>A few fun projects</p>
        </div>
        <p className="section-header-text">
          A handful of projects I've created to learn and refine my skills
        </p>
        <div id="work-portfolio">
          <div className="work-portfolio-div got">
            <div className="project">
              <Got />
            </div>
            <div className="work-description">
              <p className="work-title">
                GAME of THRONES DIGITAL PLAYING CARDS
              </p>
              <p className="work-subtitle">
                Stats of your favorite (or least favorite) characters
              </p>
              <p className="work-p">
                JavaScript • React • Node.js • GraphQL • AWS • CSS • BootStrap
              </p>
              <p>
                I built this project because I wanted to build my own API and
                learn GraphQL. The API is built with AWS AppSync and Amazon S3.
                Click on a card to see the back!
              </p>
            </div>
          </div>
          <div className="work-portfolio-div t-rex">
            <div className="project">
              <Trex />
            </div>
            <div className="work-description">
              <p className="work-title">THESAURUS-REX</p>
              <p className="work-subtitle">
                A friendly dinosaur with a big vocabulary
              </p>
              <p className="work-p">
                JavaScript • React • Node.js • CSS • BootStrap
              </p>
              <p>
                Thesaurus-Rex started as a Hackathon and then it took on a life
                of its own. This was my first deep dive into using an API and
                understanding React state. Also, this project let me flex my
                creative muscle and is the reason I love CSS.{" "}
              </p>
            </div>
          </div>
          <div className="work-portfolio-div weather">
            <div className="project">
              <Weather />
            </div>
            <div className="work-description">
              <p className="work-title">WEATHER APP</p>
              <p className="work-subtitle">
                Check the weather around the globe
              </p>
              <p className="work-p">
                JavaScript • React/Redux • Node.js • CSS • BootStrap
              </p>
              <p>
                The Weather App is a straight forward BootStrap design, which is
                great way to learn responsive layout. This is one of the first
                projects where I utilized the “magic” of React Redux. The two
                APIs I used are Unsplash for the city image and OpenWeatherMap
                for the weather.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppWork;
