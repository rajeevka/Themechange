import React from "react";
const Header = ({ darkTheme, setDarkTheme }) => {
 
  return (
    <>
      <div className="navbar" style={darkTheme}>
       
        <h1>Overreacted</h1>
        <button
          onClick={() => {
           
            if (darkTheme.color === "white") {
              setDarkTheme({ backgroundColor: "white", color: "black" });
            } else {
              setDarkTheme({ backgroundColor: "black", color: "white" });
            }
          }}
        >
          Toggle
        </button>
      </div>
    </>
  );
};


export default Header