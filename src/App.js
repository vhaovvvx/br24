import { useState } from 'react';
import Recaptcha from 'react-recaptcha';
import './App.css';
import InputValidate from './components/view/InputValidate/InputValidate';
import Input from './UI/Input/Input';

function App() {
  const [data, setData] = useState({
    isVerified: false,
  });
  const [dataResult, setDataResult] = useState([]);

  const submit = (e) => {
    if (!data.isVerified) {
      alert('ban chua xac thuc la robot');
      return;
    }

    if (data.isVerified) {
      alert('true');
    }
  };

  const handleVerifyCallBack = () => {
    setData({ isVerified: true });
  };

  const onLoadCallBack = () => {
    alert('load success');
  };

  const handleResult = (data, id) => {
    for (let i = 0; i < id; i++) {
      for (let j = i; j < id; j++) {
        // if (dataResult[i] == dataResult[j]) {
        //   dataResult.push(data, id);
        // }
      }
    }
    // console.log(dataResult);
  };

  return (
    <div className='App'>
      <InputValidate
        dataPlaceholder='User Name'
        errorText='Email required'
        validate='email'
        min='6'
        getResult={handleResult}
        id='1'
      >
        test1
      </InputValidate>
      <InputValidate
        dataPlaceholder='PassWord'
        validate='password'
        typeInput='password'
      >
        test2
      </InputValidate>
      <InputValidate
        dataPlaceholder='PassWord2'
        min='9'
        errorText='điều kiện nhập chưa thỏa mãn'
        validate='password and regex'
        typeInput='password'
        getResult={handleResult}
        id='2'
      >
        test3
      </InputValidate>
      <div className='recaptcha'>
        {/* <Recaptcha
          sitekey='6Lcdc_ccAAAAAIMf2ntaDdW_89Egn_8-KchJ5TDi'
          // render='onload'
          // type='undefined'
          verifyCallback={handleVerifyCallBack}
          onloadCallback={onLoadCallBack}
          // type='image'
        /> */}
      </div>
      <div className='submit' onClick={submit}>
        submit
      </div>
      ,
    </div>
  );
}

export default App;
