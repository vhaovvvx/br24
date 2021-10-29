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
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  browserHistory,
} from 'react-router-dom';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Sign from './Sign';

function Login() {
  return (
    <Router>
      <Switch>
        <Route path='/Register' component={Register}></Route>
        <Route path='/ForgotPassword' component={ForgotPassword}></Route>

        <div className='login-container'>
          <div className='login--form'>
            <Sign title='Sign in with'></Sign>
            <div className='login--form__input'>
              <div className='form--wrapp'>
                <InputValidate
                  widthData='384'
                  dataPlaceholder='Email'
                  typeInput='text'
                  errorText='Email Required'
                  validate='email'
                  location='top'
                  id='1'
                />
              </div>
              <div className='form--wrapp'>
                <InputValidate
                  widthData='384'
                  dataPlaceholder='Password'
                  typeInput='password'
                  validate='password'
                  min='6'
                  location='top'
                  id='2'
                />
                <Link
                  to='/ForgotPassword'
                  className='form--wrapp__foggot-password'
                >
                  FORGOT?
                </Link>
              </div>
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
              <Link to='/Register' className='signup--account'>
                REQUEST AN ACCOUNT
                <div
                  className='login--form__sigup-nextstep'
                  style={{ marginTop: '6px', marginLeft: '8px' }}
                >
                  <NextStep></NextStep>
                </div>
              </Link>
            </div>
          </div>

          <ul className='bottom--group'>
            <li className='bottom--group__items'>Impressum</li>
            <li className='bottom--group__items'>Privacy Policy</li>
            <li className='bottom--group__items'>Term of Use</li>
            <li className='bottom--group__items'>© 2018, Br24 Vietnam</li>
          </ul>
        </div>
      </Switch>
    </Router>
  );
}

export default Login;
