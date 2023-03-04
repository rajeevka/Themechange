import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";


function App() {
   const [darkTheme, setDarkTheme] = useState({
     backgroundColor: "white",
     color: "black",
   });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />}
        ></Route>
        <Route
          path="Contact"
          element={
            <Contact darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          }
        ></Route>
        <Route
          path="Service"
          element={
            <Service darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
