
import React from "react";

function Home() {
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
        <h1 style={headingStyle}>Hello!</h1>
        <h1 style={headingStyle}>I am Mitta Sai Divya</h1>
        <h1 style={headingStyle}> I am a developer</h1>
        
      </div>
    </div>
  );
}

export default Home;



// echo "# reacttask-6" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Lahari200217/reacttask-6.git
// git push -u origin main
