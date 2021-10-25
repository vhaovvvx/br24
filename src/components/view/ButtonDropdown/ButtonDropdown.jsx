import React from 'react';
import PropTypes from 'prop-types';

ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func,
};

function ButtonDropdown(props) {
  console.log(props);
  const { toggle, isOpen } = props;
  return (
    <React.Fragment>
      <div className='ButtonDropdown' onClick={toggle}>
        {isOpen ? props.children : props.children[0]}
      </div>
    </React.Fragment>
  );
}

export default ButtonDropdown;
