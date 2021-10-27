import React, { useState } from 'react';
import './Input.scss';

function Input(props) {
  const [value, setValue] = useState('');
  const [opacity, setOpacity] = useState('1');
  const error = true;

  const { type, name, label, disabled, mw } = props;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = (e) => {
    setOpacity('0');

    if (e.target.value === '') {
      setOpacity('1');
    }
  };

  const handleFocus = (e) => {
    setOpacity('1');
  };

  const mwStyle = {
    maxWidth: mw,
  };

  const errorInput = {
    border: `${error ? '1px solid red' : ''}`,
  };

  return (
    <div className='input-container' style={mwStyle}>
      {error && <p className='error'>loi~ day loi~ dayyyyy</p>}
      {error && <p className='vip-error'>loi~ dayyyyy</p>}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={handleFocus}
        style={errorInput}
      />
      <label
        style={{ opacity: opacity }}
        htmlFor={name}
        className={error ? 'errorLabel' : 'label'}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
