import React, { useState } from "react";
import "./TextArea.scss";

function TextArea(props) {
  const [value, setValue] = useState("");
  const [opacity, setOpacity] = useState("1");

  const { name, label, mw, h } = props;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = (e) => {
    setOpacity("0");

    if (e.target.value === "") {
      setOpacity("1");
    }
  };

  const handleFocus = (e) => {
    setOpacity("1");
  };

  const mwStyle = {
    maxWidth: mw,
    height: h,
  };

  return (
    <div className="textarea-container" style={mwStyle}>
      <textarea
        id={name}
        value={value}
        onChange={handleChange}
        onClick={handleFocus}
        onBlur={handleBlur}
      ></textarea>
      <label
        style={{ opacity: opacity }}
        htmlFor={name}
        className="label"
      >
        {label}
      </label>
    </div>
  );
}

export default TextArea;
