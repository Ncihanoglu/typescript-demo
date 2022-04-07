import React from "react";
import "./backdrop.css";
const Backdrop: React.FC = ({ children }) => {
  return <div className="backdrop-container">{children}</div>;
};

export default Backdrop;
