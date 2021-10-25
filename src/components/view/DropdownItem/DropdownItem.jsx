import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DropdownItem.scss';
import { CheckMark } from '../../font-icons/icons/Icon';

DropdownItem.propTypes = {};

function DropdownItem(props) {
  const [clicked, setClicked] = useState(-1);
  const { data, changeItem } = props;

  const getItem = (item, index) => {
    setClicked(index);
    changeItem(item, index);
  };

  return (
    <React.Fragment>
      {data
        ? data.map((item, index) => {
            return (
              <div className='test'>
                <div
                  key={index}
                  className={
                    index === clicked
                      ? 'dropdown-items active'
                      : 'dropdown-items'
                  }
                  onClick={() => getItem(item, index)}
                >
                  {item}
                  <span style={{ position: 'absolute', right: '12px' }}>
                    {index === clicked ? <CheckMark /> : null}
                  </span>
                </div>
              </div>
            );
          })
        : null}
    </React.Fragment>
  );
}

export default DropdownItem;
