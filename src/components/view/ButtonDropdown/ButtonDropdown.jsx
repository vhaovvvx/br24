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

ButtonDropdown.defaultProps = {
  dataStyle: '150',
};

function ButtonDropdown(props) {
  const { toggle, isOpen, dataStyle } = props;

  const styled = {
    position: 'relative',
    width: `${dataStyle}px`,
    height: '40px',
  };

  return (
    <React.Fragment>
      <div className='button-dropdown' onClick={toggle} style={styled}>
        {isOpen ? props.children : props.children}
        {/* {isOpen ? props.children : props.children[0]} */}
      </div>
    </React.Fragment>
  );
}

export default ButtonDropdown;
