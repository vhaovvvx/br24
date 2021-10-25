import React from 'react';
import PropTypes from 'prop-types';

DropdownItem.propTypes = {};

function DropdownItem(props) {
  return (
    <React.Fragment>
      <div className='dropdown-items'>{props.children}</div>
    </React.Fragment>
  );
}

export default DropdownItem;
