import React from 'react';

function DropdownMenu(props) {
  return (
    <React.Fragment>
      <div className='dropDownMenu-items'>{props.children}</div>
    </React.Fragment>
  );
}

export default DropdownMenu;
