import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';
const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>PET OWNERS</h1>
      <nav className="nav-bar-container">
        <Link to="/pets">pets</Link> |<Link to="/owners">owners</Link>
      </nav>
    </div>
  );
};

export default LandingPage;
