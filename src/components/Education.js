import React, { Component } from "react";
import EducationCss from "./Education.module.css";

import { FaGraduationCap } from "react-icons/fa";

export default class Third extends Component {
  render() {
    return (
      <div className="section">
        <div className={EducationCss.parentContainer}>
          <div className={EducationCss.heading_edu_exp}>
            <h2>Educations & Experience</h2>
          </div>

          <div className={EducationCss.parent_edu_exp}>
            <div className={EducationCss.education_container}>
              <h2>Education</h2>
              <div className={EducationCss.education_List}>
                <div className={EducationCss.education_clg_name}>
                  <h4> <FaGraduationCap/> Bachelor in Computer Engineering</h4>
                  <p>Pokhara University</p>
                </div>

                <div className={EducationCss.education_clg_name}>
                  <h4><FaGraduationCap/> +2 Science</h4>
                  <p> Novel Academy</p>
                </div>
                <div className={EducationCss.education_clg_name}>
                  <h4> <FaGraduationCap/> SLC</h4>
                  <p>Nepal Bharat Maitri Vidyalaya</p>
                </div>
              </div>
            </div>
            <div className={EducationCss.education_container}>
              <h2>Experience</h2>
              <div className={EducationCss.education_List}>
                <div className={EducationCss.education_clg_name}>
                  {/* <h4> <FaGraduationCap/> Bachelor in Computer Engineering</h4> */}
                  {/* <p>Pokhara University</p> */}
                  <h4>Hopefully Gaining soon...</h4>
                </div>

                <div className={EducationCss.education_clg_name}>
                  {/* <h4><FaGraduationCap/> +2 Science</h4> */}
                  {/* <p> Novel Academy</p> */}
                </div>
                <div className={EducationCss.education_clg_name}>
                  {/* <h4> <FaGraduationCap/> SLC</h4> */}
                  {/* <p>Nepal Bharat Maitri Vidyalaya</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
