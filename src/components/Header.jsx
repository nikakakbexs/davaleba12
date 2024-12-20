import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <nav>
      <Link to="/">Blogs</Link>
      <Link to="/create">Create</Link>
    </nav>
  </header>
);

export default Header;
