import React, { useState } from 'react';
import './InputValidate.scss';
import PropTypes from 'prop-types';

InputValidate.propTypes = {
  id: PropTypes.number,
};

function InputValidate(props) {
  const {
    dataPlaceholder,
    typeInput,
    errorText,
    validate,
    min,
    getResult,
    id,
  } = props;
  const [result, setResult] = useState(false);
  const [classFocus2, setClassFocus2] = useState('');
  const [errorMessage, setErrorMessage] = useState(
    `Password must be at least ${min} characters`
  );
  const [classStyled, setClassStyled] = useState({
    classFocus: '',
    classValidate: '',
    errorMessage: '',
    isValidate: '',
  });

  const regexEmail = (value) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexResult = regex.test(value);
    if (regexResult) {
      setResult(true);
      return undefined;
    } else {
      setResult(false);

      return 'Email Required';
    }
  };

  const validatePassword = (value) => {
    return value.length <= min
      ? `Password must be at least ${min} characters`
      : undefined;
  };

  const handleFocus = (e) => {
    const test4 = e.target.classList.contains('validation');
    const getClass = e.target.className;
    if (test4) {
      setClassFocus2('focus');
      const obj = {
        ...classStyled,
        classValidate: '',
        errorMessage: '',
      };
      setClassStyled(obj);
    }
  };

  const handleBlur = (e) => {
    const parseId = parseInt(id);
    const getTypeValidate = e.target.attributes.dataValidate.value;
    const getValue = e.target.value;
    const getClass = e.target.className;
    const value = e.target.value;
    if (getTypeValidate === 'email') {
      const checkValueRequired = regexEmail(getValue);
      if (checkValueRequired) {
        const obj = {
          ...classStyled,
          errorMessage: checkValueRequired,
          classValidate: 'handleValidation',
        };
        setClassStyled(obj);
      } else {
        const obj = { ...classStyled, errorMessage: checkValueRequired };
        setClassStyled(obj);
      }
    } else if (getTypeValidate === 'password') {
      const checkValueRequired = validatePassword(getValue);
      if (checkValueRequired) {
        const obj = {
          ...classStyled,
          errorMessage: checkValueRequired,
          classValidate: 'handleValidation',
        };
        setClassStyled(obj);
      } else {
        const obj = { ...classStyled, errorMessage: '' };
        setClassStyled(obj);
      }
    } else if (getTypeValidate === 'password and regex') {
      const getRegexEmailValue = regexEmail(getValue);
      const getValueValidation = validatePassword(getValue);

      if (getRegexEmailValue || getValueValidation) {
        const obj = {
          ...classStyled,
          errorMessage: errorText,
          classValidate: 'handleValidation',
        };
        setClassStyled(obj);
      }
    }

    if (getClass && value.length === 0) {
      // const obj2 = {
      //   ...classStyled,
      //   classFocus: '',
      // };
      // setClassStyled(obj2);

      setClassFocus2('');
    }
    if (getResult) {
      getResult(result, parseId);
    }
  };

  const styleInputWrapp = {
    backgroundColor: '#fff',
    display: 'block',
    margin: '10px auto',
    width: '300px',
    position: 'relative',
  };
  const styleInput = {
    width: '300px',
    height: '56px',
    outline: 'none',
    padding: '16px 48px 16px 16px',
  };
  const styleErrorMessage = {
    color: 'red',
    fontSize: '17px',
  };

  return (
    <div style={styleInputWrapp}>
      <input
        type={typeInput || 'text'}
        style={styleInput}
        id={id}
        onFocus={(e) => handleFocus(e)}
        onBlur={(e) => handleBlur(e)}
        className={`validation ${classFocus2} ${classStyled.classValidate}`}
        dataValidate={validate}
      />
      <label
        data-placeholder={dataPlaceholder}
        className='spanTest'
        htmlFor={id}
      ></label>
      <div style={styleErrorMessage}>{classStyled.errorMessage} </div>
    </div>
  );
}

export default InputValidate;
