import React from "react";
import { Link } from "react-router-dom";

const Home = ({ darkTheme, setDarkTheme }) => {
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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          nihil quod quam ad vel quis, id aperiam doloremque doloribus sit a
          iste enim voluptatum eaque ipsa nam commodi saepe odio delectus,
          reprehenderit obcaecati cumque! Nemo, molestiae aut. Enim doloribus
          rem iste accusamus reprehenderit dolorum quas quibusdam, illo
          perspiciatis nemo totam aspernatur eius vero ipsa! Explicabo natus
          atque maiores fuga voluptatem consequatur repudiandae id odit, dolores
          ullam autem corporis beatae rerum! Praesentium dolores voluptate
          distinctio a omnis consectetur aut, fugit deleniti quas cum illum
          autem reprehenderit deserunt magnam ratione aliquam in unde
          voluptates? Autem numquam odit doloremque similique eum saepe quidem!
        </p>
      </div>
    </>
  );
};


export default Home;