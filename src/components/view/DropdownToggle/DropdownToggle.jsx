import React, { useState } from 'react';
import PropTypes from 'prop-types';

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
};

function DropdownToggle(props) {
  const [clicked, setClicked] = useState(false);
  const { color } = props;
  const checkClick = (e) => {
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
      console.log('khong vao');
    }
  };
  return (
    <React.Fragment>
      <button
        style={{ backgroundColor: `${color}` }}
        onClick={(e) => checkClick(e)}
        style={
          clicked ? { border: '1px solid black' } : { backgroundColor: 'none' }
        }
      >
        {props.children}
      </button>
    </React.Fragment>
  );
}

export default DropdownToggle;
