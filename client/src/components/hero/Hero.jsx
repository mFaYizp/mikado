import React, { useState } from "react";
import "./hero.css";

// const svgBackground = `
//   <svg
//     width="949"
//     height="1296"
//     viewBox="0 0 949 1296"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g opacity="0.5" filter="url(#filter0_f_1531_3710)">
//       <circle cx="829" cy="467" r="329" fill="#041B7B" />
//     </g>
//     <defs>
//       <filter
//         id="filter0_f_1531_3710"
//         x="0"
//         y="-362"
//         width="1658"
//         height="1658"
//         filterUnits="userSpaceOnUse"
//         color-interpolation-filters="sRGB"
//       >
//         <feFlood flood-opacity="0" result="BackgroundImageFix" />
//         <feBlend
//           mode="normal"
//           in="SourceGraphic"
//           in2="BackgroundImageFix"
//           result="shape"
//         />
//         <feGaussianBlur
//           stdDeviation="250"
//           result="effect1_foregroundBlur_1531_3710"
//         />
//       </filter>
//     </defs>
//   </svg>`;

const Hero = () => {
  const [active, setActive] = useState("All");
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
          <div className="svg-background">
            <svg
              className="background-svg"
              width="293"
              height="344"
              viewBox="0 0 293 344"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.62 322.718L228.235 11.1907L275.448 19.9908L63.061 332.656L16.62 322.718Z"
                stroke="#00D3A9"
                strokeWidth="20"
              />
            </svg>
          </div>
          <img src="assets/herop.jpeg" alt="hero" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
