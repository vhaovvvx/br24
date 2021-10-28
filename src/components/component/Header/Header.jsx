import React, { useState } from "react";
import "./Header.scss";
import {
  ToggleSidebar,
  UsaFlag,
  SupportIcon,
  SignUpIcon,
  LoginIcon,
  CardIcon,
  BreadcrumbIcon,
} from "../../font-icons/icons/Icon";

function Header(props) {
  const { cumbs } = props;
  const [active, setActive] = useState(cumbs[0]);

  const handleSelect = (value) => {
    setActive(value);
  };

  return (
    <div className="header">
      <div className="header-left">
        {/* show menu if user logged in */}
        {/* <div className="header-menu">
          <div className="toggle-sidebar">
            <ToggleSidebar />
          </div>
          <p>Menu</p>
        </div> */}

        {/* default show */}
        <div className="header-laguage">
          <div className="country-flags">
            <UsaFlag />
            <p>English</p>
          </div>
        </div>
        <div className="header-support">
          <div className="support-content">
            <SupportIcon />
            <p>Support</p>
          </div>
        </div>
      </div>

      <div className="header-middle">
        {/* show default */}
        <div className="header-company">
          <div className="company-info">
            <div className="company-logo"></div>
          </div>
          <div className="company-name">Company name</div>
        </div>

        {/* show if user select special area */}
        {/* <div className="header-breadcrumb">
          <ul>
            {cumbs.map((cumb) => (
              <li key={cumb}>
                <p
                  onClick={() => handleSelect(cumb)}
                  className={active === cumb ? "active" : ""}
                >
                  {cumb}
                </p>
                <i>
                  <BreadcrumbIcon />
                </i>
              </li>
            ))}
          </ul>
        </div> */}
      </div>

      <div className="header-right">
        {/* show if user not logged in */}
        <div className="header-auth">
          <div className="header-login">
            <LoginIcon />
            <p>Log in</p>
          </div>
          <div className="header-signup">
            <SignUpIcon />
            <p>Sign up</p>
          </div>
        </div>

        {/* show if user logged in */}
        {/* <div className="header-logged_in">
          <div className="header-card">
            <div className="card-icon">
              <CardIcon />
            </div>
            <div className="card-order">
              <p className="order-name">1 order</p>
              <p className="order-total">2 products</p>
            </div>
          </div>
          <div className="header-user">
            <div className="user-avatar">
              <p>D</p>
            </div>
            <div className="user-info">
              <p className="user-name">Dio Brando</p>
              <p className="user-ID">Customer ID: 1234568</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
