import React from 'react';

function Checkbox(props) {
  const { disabled ,titleData} = props;
  return (
      <label className={`container ${disabled ? 'disabled' : ''}`}>
        {titleData}
        <input
          type='checkbox'
          className={disabled && 'input-disabled'}
          disabled={disabled}
        />
        <span className='checkmark'></span>
      </label>
  );
}

export default Checkbox;
