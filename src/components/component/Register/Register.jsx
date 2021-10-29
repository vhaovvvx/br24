import React from 'react';
import DropdownGroup from '../../view/ButtonDropdownGroup/DropdownGroup';
import InputValidate from '../../view/InputValidate/InputValidate';
import Sign from '../Login/Sign';
import CountryList from './DataCountry';

function Register(props) {
  console.log(CountryList);
  return (
    <div className='register-container'>
      <h3 className='h3-br24 text-center' style={{ marginTop: '64px' }}>
        Become a member
      </h3>
      <Sign title='Sign up with'></Sign>
      <div className='body--register'>
        <div className='information'>
          <div className='information--company'>
            <h3>Company Information</h3>
            <InputValidate dataPlaceholder='Company name'></InputValidate>
            <InputValidate dataPlaceholder='Company address'></InputValidate>
            <InputValidate dataPlaceholder='Zip code'></InputValidate>
            <InputValidate dataPlaceholder='City'></InputValidate>
            <InputValidate dataPlaceholder='State/Province'></InputValidate>
            <DropdownGroup
              title='Country'
              dataClick={CountryList}
            ></DropdownGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
