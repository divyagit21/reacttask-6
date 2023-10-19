import { Link } from "react-router-dom";


function Nav()
{
    return(
        <nav class="navbar" style={{backgroundColor:"lavender",color:"black"}}>
          
            <div class="nav">
                <Link to="/" class="nav-link">Home</Link>
                <Link to="/about" class="nav-link">About</Link>
                <Link to="/skill" class="nav-link">Skills</Link>
                <Link to="/project" class="nav-link">Projects</Link>
               
            </div>
        </nav>
    )
}
export default Nav;
