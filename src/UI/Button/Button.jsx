import React from "react";
import "./Button.scss";

function Button(props) {
  const { bgc, display, order, hanldeClick, disabled, btnTitle } = props;

  const activeStyle = {
    backgroundColor: bgc,
    display: "flex",
  };

  const icons = {
    display: display,
    order: order,
  };

  const disabledStyle = {
    backgroundColor: "#F4F5F6",
    cursor: "not-allowed",
    color: "DBE0E6",
    boxShadow: "none",
  };

  return (
    <div className="buttons">
      <button
        className="button-group"
        style={disabled ? disabledStyle : activeStyle}
        onClick={hanldeClick}
      >
        <div className="icons" style={icons}>
          <div className="icons-content"></div>
        </div>
        <span>{btnTitle}</span>
      </button>
    </div>
  );
}

export default Button;
