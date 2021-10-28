import React, { useState, useEffect } from "react";
import "./Tags.scss";

function Tags(props) {
  const { bgcolor, color, opacity, content } = props;
  const [bgc, setBgc] = useState("#fff");

  useEffect(() => {
    const hexToRGB = (hex) => {
      hex = "0x" + hex;
      let r = (hex >> 16) & 0xff;
      let g = (hex >> 8) & 0xff;
      let b = hex & 0xff;
      setBgc(`rgb(${r}, ${g}, ${b}, ${opacity})`);
    };

    hexToRGB(bgcolor.substring(1));
  }, [bgcolor, setBgc, opacity]);

  const tags = {
    backgroundColor: bgc,
  };

  const p = {
    color: color,
  };

  return (
    <div className="tags" style={tags}>
      <p style={p}>{content}</p>
    </div>
  );
}

export default Tags;
