import React from "react";
import "./CardContainer.css";

const CardContainer = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

export default CardContainer;
