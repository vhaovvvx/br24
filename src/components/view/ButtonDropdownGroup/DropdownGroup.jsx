import React, { useState } from 'react';
import { ArrowDown } from '../../font-icons/icons/Icon';
import ButtonDropdown from '../ButtonDropdown/ButtonDropdown';
import DropdownItem from '../DropdownItem/DropdownItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownToggle from '../DropdownToggle/DropdownToggle';

function DropdownGroup(props) {
  const { title, sizeIcon, dataClick } = props;
  const [titleButton, setTitleButton] = useState(title);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const changeItem = (item, index) => {
    setTitleButton(item);
  };
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color='red'>
        {titleButton}
        <div className='icon-dropdown'>
          <ArrowDown size={sizeIcon}></ArrowDown>
        </div>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem data={dataClick} changeItem={changeItem}></DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default DropdownGroup;
