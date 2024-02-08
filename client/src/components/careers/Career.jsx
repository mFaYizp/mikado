import React, { useState } from "react";
import "./career.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Career = () => {
  const [show, setShow] = useState(true);
  return (
    <section className="career-section">
      <div className="border" />
      <div className="drop">
        {show ? (
          <AddIcon
            fontSize="large"
            onClick={() => setShow(false)}
            className="drop-icon"
          />
        ) : (
          <RemoveIcon
            fontSize="large"
            onClick={() => setShow(true)}
            className="drop-icon"
          />
        )}
      </div>
      <div className="career">
        <div>
          <h1 className="job-header">
            Product Marketing Manager - Generative AI
          </h1>
        </div>
        <div>
          <span className="job-type">Business</span>
        </div>
        <div className="job-description">
          <h2 className="job-requirement">
            5+ Years of Product Marketing Experience
          </h2>
          <p className="job-skills">
            <span className="job-skills-header"> Skills -</span>
            <ul>
              <li>
                Experience managing and measuring marketing performance in
                various channels{" "}
              </li>
              <li>
                Product marketing experience and familiarity with generative AI
                or developer audiences{" "}
              </li>
              <li> Strong Communication and Presentation skills.</li>
              <li> Ability to meet tight deadlines with high quality work. </li>
              <li> Strong knowledge of AI & Saas Tools.</li>
            </ul>
          </p>
          <h2 className="job-requirement"> Job Description:</h2>
          <p className="job-skills">
            As a Product Marketing Manager, you will engage our customers and
            prospects to help them understand how our next generation AI tools
            and services that helps them be more productive, while also
            entertaining audiences building products with global intellectual
            properties.
          </p>
        </div>
      </div>
      <div className="border" style={{ marginTop: "20px" }} />
    </section>
  );
};

export default Career;
