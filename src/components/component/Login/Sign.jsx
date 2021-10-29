import React from 'react';
import linkedin from '../../font-icons/rootSvg/linkedin.svg';
import xing from '../../font-icons/rootSvg/xing.svg';
import './Sign.scss';

function Sign(props) {
  return (
    <React.Fragment>
      <div className='login--form__title'>
        <h3>{props.title}</h3>
      </div>
      <div className='login--form__signwith'>
        <a href='#' className='signwith linkedin'>
          <img src={linkedin} className='testImg' />
        </a>
        <a href='#' className='signwith xing'>
          <img src={xing} className='testImg' />
        </a>
      </div>
    </React.Fragment>
  );
}

export default Sign;
