import React from "react";
import { useState } from "react";
import Comp from "./Comp";
import Header from "./Header";

function App() {
   const [darkTheme, setDarkTheme] = useState({
     backgroundColor: "white",
     color: "black",
   });
  return (
    <div className="App">
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Comp darkTheme={darkTheme} />
    </div>
  );
}

export default App;
