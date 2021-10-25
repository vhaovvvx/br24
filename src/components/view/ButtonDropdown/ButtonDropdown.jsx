import React from 'react';
import PropTypes from 'prop-types';
import './ButtonDropdown.scss';

ButtonDropdown.propTypes = {
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  toggle: PropTypes.func,
};

function ButtonDropdown(props) {
  const { toggle, isOpen } = props;
  return (
    <React.Fragment>
      <div className='button-dropdown' onClick={toggle}>
        {isOpen ? props.children : props.children}
        {/* {isOpen ? props.children : props.children[0]} */}
      </div>
    </React.Fragment>
  );
}

export default ButtonDropdown;
