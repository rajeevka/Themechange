import React from "react";
import { Link } from "react-router-dom";

const Contact = ({ darkTheme, setDarkTheme }) => {
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
        <h1>You can mail me help@geekster.in</h1>
      </div>
    </>
  );
};

export default Contact;
