import React, { Component } from "react";

import IntroductionCss from "./Introduction.module.css";
import image from "../images/mkumari.jpeg";

export default class Introduction extends Component {
  render() {
    return (
      <div className="section">
        <div className={IntroductionCss.parentContainer}>
          <div className={IntroductionCss.mImage}>
            <img src={image} alt="photo_mkumari" />
          </div>
          <div className={IntroductionCss.infoSection}>
            <div className={IntroductionCss.hello_there}>
              <h2>
                {/* {" "} */}
                <span className={IntroductionCss.hello}> Hello, </span>I
                am MKumari Thapa
              </h2>
              <p>I'm a  <span className={IntroductionCss.react_developer}>React Developer</span></p>
            </div>
            <div className={IntroductionCss.contact_info}>
              <p>Phone No: +977 9804180764</p>
              <p>Email: mkumari@gmail.com</p>
              <p>Address: Pokhara,Nepal</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
