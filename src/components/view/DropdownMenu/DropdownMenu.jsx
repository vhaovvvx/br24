import React from 'react';
import { defaultProps } from 'react-recaptcha';
import './DropdownMenu.scss';

DropdownMenu.defaultProps = {
  maxWidthData: '',
};

function DropdownMenu(props) {
  const { maxWidthData } = props;
  return (
    <React.Fragment>
      <div
        className='dropDownMenu-items'
        style={{
          position: 'relative',
          zIndex: '100',
          maxWidth: `${maxWidthData}px`,
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default DropdownMenu;
