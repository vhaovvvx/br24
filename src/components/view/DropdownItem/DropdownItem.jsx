import React, { useState } from "react";
import PropTypes from "prop-types";
import "./DropdownItem.scss";
import { CheckMark } from "../../font-icons/icons/Icon";
import { VnFlag, ElFlag, GerFlag } from "../../font-icons/icons/Flags";

DropdownItem.propTypes = {};

function DropdownItem(props) {
  const [clicked, setClicked] = useState(-1);
  const { data, changeItem } = props;
  const flag = [VnFlag, ElFlag, GerFlag];

  const getItem = (item, flag, index) => {
    setClicked(index);
    changeItem(item, flag, index);
  };

  return (
    <React.Fragment>
      {data
        ? data.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index === clicked ? "dropdown-items active" : "dropdown-items"
                }
                onClick={() => getItem(item, flag[index], index)}
              >
                <i>{flag[index]}</i>
                <p>{item}</p>
                <span style={{ position: "absolute", right: "12px" }}>
                  {index === clicked ? <CheckMark /> : null}
                </span>
              </div>
            );
          })
        : null}
    </React.Fragment>
  );
}

export default DropdownItem;
