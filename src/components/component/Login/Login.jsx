import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import linkedin from '../../font-icons/rootSvg/linkedin.svg';
import xing from '../../font-icons/rootSvg/xing.svg';
import InputValidate from '../../view/InputValidate/InputValidate';
import Header from '../Header/Header';
import { CheckMark, nextStep } from '../../font-icons/icons/Icon';
import Button from '../../../UI/Button/Button';
import Checkbox from '../../view/CheckBox/Checkbox';
import OutLineButton from '../../../UI/Button/OutLineButton';
import { NextStep } from '../../font-icons/icons/Icon';

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
            widthData='384'
            dataPlaceholder='Email'
            typeInput='text'
            errorText='Email Required'
            validate='email'
            localtion='top'
            id='1'
          />
          <InputValidate
            widthData='384'
            dataPlaceholder='Password'
            typeInput='password'
            validate='password'
            min='6'
            localtion='flat'
            id='2'
          />
        </div>
        <div className='login--form__submit'>
          <div className='flex justify-center align-center'>
            <Checkbox titleData='Remember Me' />
          </div>
          <Button
            mw='120px'
            bgc='#0D004C'
            display='none'
            btnTitle='Submit'
          ></Button>
        </div>
        <div className='login--form__signup'>
          <button href='#' className='signup--account'>
            REQUEST AN ACCOUNT
            <div
              className='login--form__sigup-nextstep'
              style={{ marginTop: '6px', marginLeft: '8px' }}
            >
              <NextStep></NextStep>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
