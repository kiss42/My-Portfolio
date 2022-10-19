import { Button } from "@chakra-ui/react";
import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {" "}
              <a href="https://www.facebook.com/zerosheart">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://github.com/kiss42">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.instagram.com/haitianpapi_/">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Steven</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🏃🏿‍♂️ ",
                    1000,
                    "Full Stack Dev 🧑🏾‍💻 ",
                    1000,
                    "Gamer 🎮",
                    1000,
                    "React/React Native Dev 😏",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front end and backend
                experience
              </span>
            </span>
            <div className="profile-options">
              <button className="btn primary-btn">
                {""}
                Hire Me{" "}
              </button>
              <a href="myresume.pdf" download="Steven.pdf">
                <Button className="btn highlighted-btn">Get Resume</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
