import React, { useState } from "react";

import underlineImg from "../../images/logo.svg";
import ovalImg from "../../images/logo.svg";
import pathableLogo from "../../images/logo.svg";
import pathableScreen from "../../images/logo.svg";
import maestroLogo from "../../images/logo.svg";
import maestroScreen from "../../images/logo.svg";
import lemlistLogo from "../../images/logo.svg";
import lemlistScreen from "../../images/logo.svg";
import chatraLogo from "../../images/logo.svg";
import chatraScreen from "../../images/logo.svg";
import anyrunLogo from "../../images/logo.svg";
import anyrunScreen from "../../images/logo.svg";
import rocketchatLogo from "../../images/logo.svg";
import rocketchatScreen from "../../images/logo.svg";
import apifyLogo from "../../images/logo.svg";
import apifyScreen from "../../images/logo.svg";

const pathableInfo = {
  logo: pathableLogo,
  screen: pathableScreen,
  title: "Mobile Evens Apps & Conference Microsites",
  company: "Pathable",
  description:
    "Pathable's platform produces white label mobile apps and websites for conferences, trade shows and meetings of all types.",
  button: null,
  buttonLink: null,
};
const maestroInfo = {
  logo: maestroLogo,
  screen: maestroScreen,
  title: "Customer Service Quality Assurance Software",
  company: "Maestro",
  description:
    "Quality assurance software that helps managers empower agents to construct exceptional customer experiences  ",
  button: null,
  buttonLink: null,
};
const lemlistInfo = {
  logo: lemlistLogo,
  screen: lemlistScreen,
  title: "Send Cold Emails That Get Replies",
  company: "Lemlist",
  description:
    "Lemlist is the first cold emailing platform that allows sales teams to get more replies to their sales prospecting emails.",
  button: "See Case Study",
  buttonLink:
    "https://blog.meteor.com/how-lemlist-grew-to-10-000-paying-customers-with-meteor-192445594808",
};
const chatraInfo = {
  logo: chatraLogo,
  screen: chatraScreen,
  title: "Live Chat Software",
  company: "Chatra",
  description: "Chatra.io is a live chat & help desk software for businesses.",
  button: null,
  buttonLink: null,
};
const anyrunInfo = {
  logo: anyrunLogo,
  screen: anyrunScreen,
  title: "Interactive Malware Hunting Service",
  company: "any.run",
  description:
    "Take your research to the next level with any.run's interactive malware analysis sandbox.",
  button: "See Case Study",
  buttonLink:
    "https://blog.meteor.com/how-any-run-became-the-most-popular-malware-sandbox-in-the-world-with-meteor-js-e7aeb5ac29e1",
};
const rocketchatInfo = {
  logo: rocketchatLogo,
  screen: rocketchatScreen,
  title: "The Ultimate Communication Platform",
  company: "Rocket.Chat",
  description:
    "Keep the workflow going by centralizing all your tools and touchpoints in one platform. Made for team collaboration, DevOps and customer engagement.",
  button: null,
  buttonLink: null,
};
const apifyInfo = {
  logo: apifyLogo,
  screen: apifyScreen,
  title: "Make The Web Work For You",
  company: "Apify",
  description:
    "Apify is a one-stop web scraping and RPA platform to let you automate any workflow that can be done manually in a web browser",
  button: "Visit Website",
  buttonLink: "https://apify.com/",
};

const BuiltWithMeteor = () => {
  const [selectedCompany, setSelectedCompany] = useState("Pathable");

  return (
    <section className="built-with-meteor-wrapper">
      <div className="Index-page-content">
        <div className="left-container">
          <h2>features</h2>


          <div className="radio-wrapper">
            <div className="radio-item">
              <label>
                <input
                  type="radio"
                  value="Pathable"
                  name="company"
                  checked={selectedCompany === "Pathable"}
                  onChange={(e) => {
                    setSelectedCompany(e.target.value);
                  }}
                />
                <span className="radio-label-name">Pathable</span>
              </label>
            </div>
            <div className="radio-item">
              <label>
                <input
                  type="radio"
                  value="Maestro"
                  name="company"
                  checked={selectedCompany === "Maestro"}
                  onChange={(e) => {
                    setSelectedCompany(e.target.value);
                  }}
                />
                <span className="radio-label-name">Maestro</span>
              </label>
            </div>
            <div className="radio-item">
              <label>
                <input
                  type="radio"
                  value="Lemlist"
                  name="company"
                  checked={selectedCompany === "Lemlist"}
                  onChange={(e) => {
                    setSelectedCompany(e.target.value);
                  }}
                />
                <span className="radio-label-name">Lemlist</span>
              </label>
            </div>
            <div className="radio-item">
              <label>
                <input
                  type="radio"
                  value="Chatra"
                  name="company"
                  checked={selectedCompany === "Chatra"}
                  onChange={(e) => {
                    setSelectedCompany(e.target.value);
                  }}
                />
                <span className="radio-label-name">Chatra</span>
              </label>
            </div>
            <div className="radio-item">
              <label>
                <input
                  type="radio"
                  value="Anyrun"
                  name="company"
                  checked={selectedCompany === "Anyrun"}
                  onChange={(e) => {
                    setSelectedCompany(e.target.value);
                  }}
                />
                <span className="radio-label-name">Any.run</span>
              </label>
            </div>
            <div className="radio-item">
              <label>
                <input
                  type="radio"
                  value="Rocketchat"
                  name="company"
                  checked={selectedCompany === "Rocketchat"}
                  onChange={(e) => {
                    setSelectedCompany(e.target.value);
                  }}
                />
                <span className="radio-label-name">Rocket.chat</span>
              </label>
            </div>
            <div className="radio-item">
              <label>
                <input
                  type="radio"
                  value="Apify"
                  name="company"
                  checked={selectedCompany === "Apify"}
                  onChange={(e) => {
                    setSelectedCompany(e.target.value);
                  }}
                />
                <span className="radio-label-name">Apify</span>
              </label>
            </div>
          </div>
          <div className="view-more">
            <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1">
              <g
                id="💎-Symbols-&amp;-Components"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="square"
                stroke-linejoin="round"
              >
                <g
                  id="Button/-Button-Link"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <g id="Icon" transform="translate(1.000000, 1.000000)">
                    <line
                      x1="13.501"
                      y1="9.997"
                      x2="5.501"
                      y2="9.997"
                      id="Path"
                    ></line>
                    <polyline
                      id="Path"
                      points="10.751 6.247 14.501 9.997 10.751 13.747"
                    ></polyline>
                    <circle id="Oval" cx="10" cy="10" r="10"></circle>
                  </g>
                </g>
              </g>
            </svg>
            <span>View More</span>
          </div>
        </div>
        <div className="right-container">
          <div className="oval-wrapper">
            <img className="oval" src={ovalImg} alt="oval" />
          </div>
          {/* Pathable */}
          <div
            className={`right-container-inner pathable ${
              selectedCompany === "Pathable" ? "active" : ""
            }`}
          >
            <div className="top-left">
              <img
                className="logo"
                src={pathableInfo.logo}
                alt="company logo"
              />
            </div>
            <div
              className="top-right"
              style={{ visibility: `${!pathableInfo.button ? "hidden" : ""}` }}
            >
              <a
                className="btn"
                href={pathableInfo.buttonLink}
                target="_blank"
                rel="noreferrer"
              >
                {pathableInfo.button}
              </a>
            </div>
            <div className="bottom-left">
              <h2 className="program-title">{pathableInfo.title}</h2>
              <h2 className="company-title">{pathableInfo.company}</h2>
              <p className="description">{pathableInfo.description}</p>
            </div>
            <div className="bottom-right">
              <img
                className="screen"
                src={pathableInfo.screen}
                alt="pathable screen"
              />
            </div>
          </div>
          {/* Maestro */}
          <div
            className={`right-container-inner maestro ${
              selectedCompany === "Maestro" ? "active" : ""
            }`}
          >
            <div className="top-left">
              <img className="logo" src={maestroInfo.logo} alt="company logo" />
            </div>
            <div
              className="top-right"
              style={{ visibility: `${!maestroInfo.button ? "hidden" : ""}` }}
            >
              <a
                className="btn"
                href={maestroInfo.buttonLink}
                target="_blank"
                rel="noreferrer"
              >
                {maestroInfo.button}
              </a>
            </div>
            <div className="bottom-left">
              <h2 className="program-title">{maestroInfo.title}</h2>
              <h2 className="company-title">{maestroInfo.company}</h2>
              <p className="description">{maestroInfo.description}</p>
            </div>
            <div className="bottom-right">
              <img className="screen" src={maestroInfo.screen} alt="screen" />
            </div>
          </div>
          {/* LemList */}
          <div
            className={`right-container-inner lemlist ${
              selectedCompany === "Lemlist" ? "active" : ""
            }`}
          >
            <div className="top-left">
              <img className="logo" src={lemlistInfo.logo} alt="company logo" />
            </div>
            <div
              className="top-right"
              style={{
                visibility: `${!lemlistInfo.button ? "hidden" : "visible"}`,
              }}
            >
              <a
                className="btn"
                href={lemlistInfo.buttonLink}
                target="_blank"
                rel="noreferrer"
              >
                {lemlistInfo.button}
              </a>
            </div>
            <div className="bottom-left">
              <h2 className="program-title">{lemlistInfo.title}</h2>
              <h2 className="company-title">{lemlistInfo.company}</h2>
              <p className="description">{lemlistInfo.description}</p>
            </div>
            <div className="bottom-right">
              <img className="screen" src={lemlistInfo.screen} alt="screen" />
            </div>
          </div>
          {/* Chatra Info */}
          <div
            className={`right-container-inner chatra ${
              selectedCompany === "Chatra" ? "active" : ""
            }`}
          >
            <div className="top-left">
              <img className="logo" src={chatraInfo.logo} alt="company logo" />
            </div>
            <div
              className="top-right"
              style={{ visibility: `${!chatraInfo.button ? "hidden" : ""}` }}
            >
              <a
                className="btn"
                href={chatraInfo.buttonLink}
                target="_blank"
                rel="noreferrer"
              >
                {chatraInfo.button}
              </a>
            </div>
            <div className="bottom-left">
              <h2 className="program-title">{chatraInfo.title}</h2>
              <h2 className="company-title">{chatraInfo.company}</h2>
              <p className="description">{chatraInfo.description}</p>
            </div>
            <div className="bottom-right">
              <img className="screen" src={chatraInfo.screen} alt="screen" />
            </div>
          </div>
          {/* Any Run */}
          <div
            className={`right-container-inner anyrun ${
              selectedCompany === "Anyrun" ? "active" : ""
            }`}
          >
            <div className="top-left">
              <img className="logo" src={anyrunInfo.logo} alt="company logo" />
            </div>
            <div
              className="top-right"
              style={{ visibility: `${!anyrunInfo.button ? "hidden" : ""}` }}
            >
              <a
                className="btn"
                href={anyrunInfo.buttonLink}
                target="_blank"
                rel="noreferrer"
              >
                {anyrunInfo.button}
              </a>
            </div>
            <div className="bottom-left">
              <h2 className="program-title">{anyrunInfo.title}</h2>
              <h2 className="company-title">{anyrunInfo.company}</h2>
              <p className="description">{anyrunInfo.description}</p>
            </div>
            <div className="bottom-right">
              <img className="screen" src={anyrunInfo.screen} alt="screen" />
            </div>
          </div>
          {/* Rocket Chat */}
          <div
            className={`right-container-inner rocketchat ${
              selectedCompany === "Rocketchat" ? "active" : ""
            }`}
          >
            <div className="top-left">
              <img
                className="logo"
                src={rocketchatInfo.logo}
                alt="company logo"
              />
            </div>
            <div
              className="top-right"
              style={{
                visibility: `${!rocketchatInfo.button ? "hidden" : ""}`,
              }}
            >
              <a
                className="btn"
                href={rocketchatInfo.buttonLink}
                target="_blank"
                rel="noreferrer"
              >
                {rocketchatInfo.button}
              </a>
            </div>
            <div className="bottom-left">
              <h2 className="program-title">{rocketchatInfo.title}</h2>
              <h2 className="company-title">{rocketchatInfo.company}</h2>
              <p className="description">{rocketchatInfo.description}</p>
            </div>
            <div className="bottom-right">
              <img
                className="screen"
                src={rocketchatInfo.screen}
                alt="screen"
              />
            </div>
          </div>
          {/* Apify */}
          <div
            className={`right-container-inner apify ${
              selectedCompany === "Apify" ? "active" : ""
            }`}
          >
            <div className="top-left">
              <img className="logo" src={apifyInfo.logo} alt="company logo" />
            </div>
            <div
              className="top-right"
              style={{ visibility: `${!apifyInfo.button ? "hidden" : ""}` }}
            >
              <a
                className="btn"
                href={apifyInfo.buttonLink}
                target="_blank"
                rel="noreferrer"
              >
                {apifyInfo.button}
              </a>
            </div>
            <div className="bottom-left">
              <h2 className="program-title">{apifyInfo.title}</h2>
              <h2 className="company-title">{apifyInfo.company}</h2>
              <p className="description">{apifyInfo.description}</p>
            </div>
            <div className="bottom-right">
              <img className="screen" src={apifyInfo.screen} alt="screen" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltWithMeteor;
