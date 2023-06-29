import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/spuros.tzotsotzolas">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.instagram.com/s_tzo/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/spyros-tsotzolas-0562521b2/">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/SpyrosTsotzolas">
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Spyros</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev ❗",
                    1000,
                    "Junior Full Stack Developer 💻",
                    1000,
                    "Junior MERN Stack Dev 😎",
                    1000,
                    //   "Enthusiastic Dev",
                    //   1000,
                    //   "Enthusiastic Dev",
                    //   1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a
              href="Spyros_Tsotzolas_Software_Engineer.pdf"
              download="Spyros_Tsotzolas_Software_Engineer.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
