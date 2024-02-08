import React, { useState } from "react";
import "./hero.css";

const Hero = () => {
  const [active, setActive] = useState(null);
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="right">
          <h1 className="hero-heading">
            Do the{" "}
            <span className="hero-span">
              {" "}
              Best work of <br /> your life
            </span>
            , which you <br /> otherwise couldn't!
          </h1>
          <p className="hero-desc">
            Join the Immerso.ai family and be at the forefront <br /> of AI
            innovation. Whether you're a Engineer, <br /> Researcher or even a
            Poet, there's a place for <br /> you in our community.
          </p>
          <div className="hero-button">
            {["All", "Engineering", "Business", "Research"].map(
              (item, index) => (
                <div
                  className={`hero-item ${active === item ? "active" : ""}`}
                  onClick={() => setActive(item === active ? null : item)}
                  key={index}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
        <div className="left">
          <img src="" alt="hero" />
        </div>
      </div>
      <div className="border" />
    </section>
  );
};

export default Hero;
