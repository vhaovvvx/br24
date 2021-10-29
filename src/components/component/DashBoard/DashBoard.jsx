import React from "react";
import "./DashBoard.scss";
import danger from "../../font-icons/rootSvg/danger.svg";
import DropdownGroup from "../../view/ButtonDropdownGroup/DropdownGroup";

const daily = ["This week", "This month", "This year"];

function DashBoard() {
  return (
    <div className="dashboard">
      <h4>Hello John!</h4>
      <div className="dashboard-notification">
        <div className="overdue-invoice">
          <div className="oi-head">
            <div>
              <img src={danger} alt="danger" />
              <p>Overdue invoice</p>
            </div>
            <p>2 days overdue</p>
          </div>

          <div className="oi-body">
            <p className="oi-body_left">Due date</p>
            <p className="oi-body_right">2019 June 25</p>
          </div>

          <div className="oi-body">
            <p className="oi-body_left">Invoice number</p>
            <p className="oi-body_right">2134523453425</p>
          </div>

          <div className="oi-body">
            <p className="oi-body_left">Invoice date</p>
            <p className="oi-body_right">2019 May 18</p>
          </div>
        </div>
        <div className="pending-voice">
          <div className="pv-head">
            <div>
              <img src={danger} alt="danger" />
              <p>pending invoice</p>
            </div>
            <p>due in 3 days</p>
          </div>

          <div className="pv-body">
            <p className="pv-body_left">Due date</p>
            <p className="pv-body_right">2019 June 25</p>
          </div>

          <div className="pv-body">
            <p className="pv-body_left">Invoice number</p>
            <p className="pv-body_right">2134523453425</p>
          </div>

          <div className="pv-body">
            <p className="pv-body_left">Invoice date</p>
            <p className="pv-body_right">2019 May 18</p>
          </div>
        </div>
      </div>

      <div className="dashboard-status">
        <div className="purchase">
          <div className="purchase-head">
            <p className="purchase-head_left">Purchaser</p>
            <p className="purchase-head_right">
              Show:{" "}
              <DropdownGroup
                title="This month"
                border="none"
                dataClick={daily}
              />
            </p>
          </div>
        </div>

        <div className="latest-order">
          <div className="latest-order-head">
            <p className="latest-order-head_left">Latest order</p>
          </div>
        </div>

        <div className="top-product">
          <div className="top-product-head">
            <p className="top-product-head_left">Top product</p>
            <p className="top-product-head_right">
              Show:{" "}
              <DropdownGroup
                title="This month"
                border="none"
                dataClick={daily}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
