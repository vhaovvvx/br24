import React, { useState } from "react";
import "./Tooltip.scss";

const Tooltip = (props) => {

  const { delay, children, content } = props

  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 300);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <div className="Tooltip-Tip top">
          {/* Content */}
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
