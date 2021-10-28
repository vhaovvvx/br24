import React, { useState } from "react";
import PropTypes from "prop-types";
import "./DropdownToggle.scss";

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  "data-toggle": PropTypes.string,
  "aria-haspopup": PropTypes.bool,
};

function DropdownToggle(props) {
  const [clicked, setClicked] = useState(false);
  const { color, border } = props;
  const checkClick = (e) => {
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  const languageDropDown = {
    border: border,
  };

  return (
    <React.Fragment>
      <button
        className="dropdown-toggle"
        onClick={(e) => checkClick(e)}
        style={
          (clicked
            ? { border: "1px solid #DBE0E6" }
            : { backgroundColor: "none" },
          languageDropDown)
        }
      >
        {props.children}
      </button>
    </React.Fragment>
  );
}

export default DropdownToggle;
