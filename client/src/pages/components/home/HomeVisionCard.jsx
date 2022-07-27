import React from "react";
import "./HomeVisionCard.css";

import PropTypes from "prop-types";

function HomeVisionCard({ icon, title, text }) {
  return (
    <div className="homeVisionCard">
      <span className="icon">
        <img className="iconImage" src={icon} alt="icon" />
      </span>
      <h4 className="title">{title}</h4>
      <p className="text">{text}</p>
    </div>
  );
}
HomeVisionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomeVisionCard;
