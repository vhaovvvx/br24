import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
// import Leftbar from "../Sidebar/Leftbar";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import "./Container.scss";

function Container() {
  const [isShow, setShow] = useState(true);
  console.log(isShow);

  const toogleSidebar = (value) => {
    setShow(value);
  };

  return (
    <>
      <Header toogleSidebar={toogleSidebar} />
      <div className="main-container">
        <Sidebar toggle={isShow} />
        {/* <Leftbar toggle={isShow} /> */}
        <MainContent />
      </div>
    </>
  );
}

export default Container;
