import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import linkedin from '../../font-icons/rootSvg/linkedin.svg';
import xing from '../../font-icons/rootSvg/xing.svg';
import InputValidate from '../../view/InputValidate/InputValidate';
import Header from '../Header/Header';

function Login() {
  return (
    <div className='login-container'>
      <Header />
      <div className='login--form'>
        <div className='login--form__title'>
          <h3>Sign in with</h3>
        </div>
        <div className='login--form__signwith'>
          <a href='#' className='signwith linkedin'>
            <img src={linkedin} className='testImg' />
          </a>
          <a href='#' className='signwith xing'>
            <img src={xing} className='testImg' />
          </a>
        </div>
        {/* 
        typeInput,
    errorText,
    validate,
    min, */}
        <div className='login--form__input'>
          <InputValidate
            dataPlaceholder='Email'
            typeInput='text'
            errorText='Email Required'
            validate='email'
            localtion='top'
            id='1'
          />
          <InputValidate
            dataPlaceholder='Password'
            typeInput='password'
            validate='password'
            min='6'
            localtion='flat'
            id='2'
          />
        </div>
        <div className='login--form__submit'></div>
        <div className='login--form__signup'></div>
      </div>
    </div>
  );
}

export default Login;
