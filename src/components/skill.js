import React from "react";

function Skills() {
  const divStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "92vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    backgroundColor: "lavender"
  };

  const imageContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Align images to the center
    justifyContent: "center", // Center the images horizontally
    width: "100%",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center", // Center the images horizontally within each row
    margin: "5px 0", 
    fontSize: "35px"// Adjust margin as needed
  };


  return (
    <div style={divStyle}>
      <div style={imageContainerStyle}>
      <h1 style={{fontSize: "50px",color:"Black"}}>Skills</h1>
        <div style={rowStyle}>
         <ul>
          <li>
            JAVA
          </li>
          <li>
            PYTHON
          </li>
          <li>
            DATA STRUCTURES AND ALGORITHMS
          </li>
          <li>
            HTML,CSS,JS
          </li>
          <li>
            MYSQL
          </li>
         </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
