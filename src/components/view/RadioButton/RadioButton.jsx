import React, { useState } from 'react';

function RadioButton(props) {
  console.log(props);
  const { disabled, getData, check } = props;
  const [dataForm, setDataForm] = useState({
    selected: '',
  });

  const testChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const name = e.target.name;
    if (checked) {
      setDataForm({ [name]: value });
    }
    if (getData) {
      getData({ [name]: value });
    }
  };

  return (
    <div>
      <label className={`container radio ${disabled ? 'disabled' : ''}`}>
        {props.children}
        <input
          type='radio'
          name='selected'
          value={props.children}
          id={props.children || dataForm}
          className='disabled'
          disabled={disabled}
          onChange={(e) => testChange(e)}
          defaultChecked={check}
        />
        <label
          className='checkmark radio'
          htmlFor={props.children || dataForm}
        ></label>
      </label>
    </div>
  );
}

export default RadioButton;
