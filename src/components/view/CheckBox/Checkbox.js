import React from 'react';

function Checkbox(props) {
  return (
    <div>
      <label class='container' disabled='disabled'>
        Selected
        <input type='checkbox' />
        <span className='checkmark'></span>
      </label>
      <label className='container disabled'>
        Disabled Selected
        <input type='checkbox' className='input-disabled' />
        <span className='checkmark disabled'></span>
      </label>
      <label className='container'>
        Three
        <input type='checkbox' />
        <span className='checkmark'></span>
      </label>
      <label className='container'>
        Four
        <input type='checkbox' />
        <span className='checkmark'></span>
      </label>
    </div>
  );
}

export default Checkbox;
