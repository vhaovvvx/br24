import React from "react";
import "./Sidebar.scss";

function Leftbar(props) {
  const { toggle } = props;

  return (
    <div className={toggle ? "leftbar" : "leftbar-nm"}>
      <p>DS COLDERN</p>
    </div>
  );
}

export default Leftbar;
