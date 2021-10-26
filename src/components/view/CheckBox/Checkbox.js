import React from 'react';

function Checkbox(props) {
  const { disabled } = props;
  return (
    <div>
      <label className={`container ${disabled ? 'disabled' : ''}`}>
        Disabled Selected
        <input
          type='checkbox'
          className={disabled && 'input-disabled'}
          disabled={disabled}
        />
        <span className='checkmark'></span>
      </label>
    </div>
  );
}

export default Checkbox;
