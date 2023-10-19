// 

import React from "react";

function Project() {
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


  const headingStyle = {
    fontSize: "50px",
    
  };

  return (
    <div style={divStyle}>
      <div>
        <h1 style={headingStyle}><h1 style={{ color: "black" }}>Slient Speech Recognition:</h1>
          <p>
            Automatic Lip reading Model using 3D CNN and GRU
          </p>
       
            <h1 style={{ color: "black" }}>Youtube Clone:</h1>
            <p>
              Using HTML,CSS,JS
            </p></h1>
      
      </div>
    </div>
  );
}

export default Project;



// echo "# reacttask-6" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Lahari200217/reacttask-6.git
// git push -u origin main
