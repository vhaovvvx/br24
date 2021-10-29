import React, { useState } from "react";
import "./Sidebar.scss";

import linkedin from "../../font-icons/rootSvg/linkedin.svg";
import xing from "../../font-icons/rootSvg/xing.svg";
import facebook from "../../font-icons/rootSvg/facebook.svg";
import houzz from "../../font-icons/rootSvg/houzz.svg";

function Sidebar(props) {
  const [active, setActive] = useState(0);
  const { toggle } = props;
  const titles = [
    "Dashboard",
    "Orders",
    "Products",
    "Projects",
    "Quotations",
    "Invoices",
    "Reports",
  ];

  const handleSetActive = (value) => {
    setActive(value);
  };

  return (
    <div className={toggle ? "sidebar" : "sidebar-hide"}>
      <ul>
        {titles.map((title, index) => (
          <li
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => handleSetActive(index)}
          >
            <a href={`#${title.toLocaleLowerCase()}`}>{title}</a>
          </li>
        ))}
      </ul>

      <div className="about-us">
        <div className="bm">
          <p>Impressum</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>

        <div className="social-logo">
          <img src={linkedin} alt="linkedin" />
          <img src={xing} alt="xing" />
          <img src={facebook} alt="facebook" />
          <img src={houzz} alt="houzz" />
        </div>

        <div className="develop">
          <p>© 2018, Br24 Vietnam</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
