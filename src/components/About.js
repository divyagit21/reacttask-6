
import React from "react";

function About() {



  const divStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "92vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
    backgroundColor: "lavender"
  };

  const headingStyle = {
    fontSize: "35px",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
  };
  const paraStyle = {
    fontSize: "30px",
    color: "black"
  };


  return (

    <div style={divStyle}>
      <div>
        <h1 style={headingStyle}>About me</h1>
        <p style={paraStyle}>
                  A passionate coder looking for opportunities to learn and grow in the technical industry.
          I am an inquisitive and empathetic individual
          wishing to utilise my technical skills to give back to society
</p>
        </div>
      </div>

      );
}

      export default About;







