import React from 'react';
import PropTypes from 'prop-types';
import './DropdownItem.scss';

DropdownItem.propTypes = {};

function DropdownItem(props) {
  const { data, changeItem } = props;

  const getItem = (item, index) => {
    changeItem(item, index);
  };

  return (
    <React.Fragment>
      {data
        ? data.map((item, index) => {
            return (
              <div
                className='dropdown-items'
                key={index}
                onClick={() => getItem(item, index)}
              >
                {item}
              </div>
            );
          })
        : null}
    </React.Fragment>
  );
}

export default DropdownItem;
