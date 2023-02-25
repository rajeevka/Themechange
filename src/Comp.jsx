import React from "react";
import "./App.css";

const Comp = ({ darkTheme }) => {
  return (
    <>
      <div className="bottom" style={darkTheme}>
        <h2>The wet codebase</h2>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <h2>Goodbye, clean code</h2>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <h2>My Decade in Review</h2>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <h2>What are the react team princioples</h2>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
      </div>
    </>
  );
};

export default Comp;
