import React from "react";
import "./benefits.css";

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="benefits">
        <h1 className="benefits-header">Benefits</h1>
        <div className="benefits-desc">
          <p className="benefits-desc-p">
            {" "}
            At Immerso.ai, we understand that our employees are our greatest
            asset, which is why we offer a comprehensive benefits package
            designed to support their personal and professional growth. Our aim
            is to create an inclusive high energy work environment where
            performance is rewarded, work-life balance is nurtured, and
            long-term well-being is looked after. From competitive financial
            rewards to flex working options to robust health & wellness
            programs.
          </p>
        </div>
        <div className="benefits-images">
          <div className="benefits-images-item">
            <img src="assets/benefits-icon-1.png" alt="benefits-img-1" className="benefits-img"/>
            <h2 className="benefits-images-header">
              Work-Life Balance nurturing
            </h2>
          </div>
          <div className="benefits-images-item">
            <img src="assets/benefits-icon-2.png" alt="benefits-img-2" className="benefits-img"/>
            <h2 className="benefits-images-header">
              Competitive Compensation and Performance Rewards
            </h2>
          </div>
          <div className="benefits-images-item">
            <img src="assets/benefits-icon-3.png" alt="benefits-img-3" className="benefits-img"/>
            <h2 className="benefits-images-header">
              Health and Wellness Programs
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
