import React from "react";
import { Link } from "react-router-dom";


const Service = ({ darkTheme, setDarkTheme }) => {
  return (
    <>
      <span>
        i have changed theme to{" "}
        {darkTheme.color === "white" || darkTheme.color === "cyan"
          ? "Dark"
          : "Light"}
      </span>
      <div className="navbar" style={darkTheme}>
        <p>Geekster</p>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Contact">Contact</Link>
        </div>
        <div>
          <Link to="/Service">Service</Link>
        </div>
        <div className="bottom" style={darkTheme}></div>
        <button
          onClick={() => {
            if (darkTheme.color === "white" || darkTheme.color === "cyan") {
              setDarkTheme({ backgroundColor: "white", color: "black" });
            } else {
              setDarkTheme({ backgroundColor: "black", color: "cyan" });
            }
          }}
        >
          toggle to Theme{"  "}
          {darkTheme.color === "white" || darkTheme.color === "cyan"
            ? "Dark"
            : "Light"}
        </button>

        <h1> Our service are not available</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae
          quas aliquid necessitatibus eius voluptate expedita, sed esse, minus
          officia recusandae illo hic commodi aliquam officiis culpa sit, modi
          asperiores?
        </p>
      </div>
    </>
  );
};

export default Service;
