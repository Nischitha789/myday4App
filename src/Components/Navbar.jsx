import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
      <div id='navlink'>
      <nav >
      
        <Link to="/">All</Link>
        <Link to="/fullstack">Full Stack</Link>
        <Link to="/datascience">Data Science</Link>
        <Link to="/cyber">Cyber Security</Link>
        <Link to="/Career">Career</Link>
        
      </nav>
      <hr/>
    </div>
  );
};

export default Navbar;
