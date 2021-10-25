import React from 'react';

function DropdownMenu(props) {
  return (
    <React.Fragment>
      <div className='dropDownMenu-items' style={{ position: 'relative' }}>
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default DropdownMenu;
