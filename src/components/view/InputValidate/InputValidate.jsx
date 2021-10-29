import React, { useState } from 'react';
import './InputValidate.scss';
import PropTypes from 'prop-types';
import { defaultProps } from 'react-recaptcha';

InputValidate.defaultProps = {};

function InputValidate(props) {
  const [result, setResult] = useState(false);

  const {
    dataPlaceholder,
    typeInput,
    errorText,
    validate,
    min,
    getResult,
    id,
    localtion,
    widthData,
  } = props;
  let top,
    flat = undefined;

  if (localtion) {
    if (localtion == 'top') {
      top = true;
    } else if (localtion == 'flat') {
      flat = true;
    }
  }

  // console.log(result);
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
    console.log(getTypeValidate);
    const getValue = e.target.value;
    console.log(getValue);
    const getClass = e.target.className;
    const value = e.target.value;
    if (getTypeValidate === 'email') {
      console.log('co vao nha');
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
    setResult({ ...result, true: '1' });
    if (getResult) {
      // debugger;
      const data1 = {
        ...getResult,
        status: result,
        id: parseId,
      };
      getResult(data1);
    }
  };

  const styleInputWrapp = {
    backgroundColor: '#fff',
    display: 'block',
    margin: '16px auto',
    width: '100%',
    maxWidth: `${widthData}px`,
    position: 'relative',
  };
  const styleInput = {
    width: '100%',

    maxWidth: `${widthData}px`,
    height: '56px',
    outline: 'none',
    padding: '16px 48px 16px 16px',
  };
  const styleErrorMessage = {
    color: 'red',
    fontSize: '17px',
    position: 'absolute',
    top: '-18px',
  };

  return (
    <React.Fragment>
      <div style={styleInputWrapp}>
        {top && (
          <div style={styleErrorMessage}>{classStyled.errorMessage} </div>
        )}

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
        {flat && (
          <div style={styleErrorMessage}>{classStyled.errorMessage} </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default InputValidate;
