import React, { useState } from 'react';
import { ArrowDown } from '../../font-icons/icons/Icon';
import ButtonDropdown from '../ButtonDropdown/ButtonDropdown';
import DropdownItem from '../DropdownItem/DropdownItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownToggle from '../DropdownToggle/DropdownToggle';

DropdownGroup.defaultProps = {
  // title: '1',
};

function DropdownGroup(props) {
  const { title, sizeIcon, dataClick, maxWidth } = props;
  const [titleButton, setTitleButton] = useState(title);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const changeItem = (item, index) => {
    setTitleButton(item);
  };
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} dataStyle={maxWidth}>
      <DropdownToggle color='red'>
        {titleButton}
        <div className='icon-dropdown'>
          <ArrowDown size={sizeIcon}></ArrowDown>
        </div>
      </DropdownToggle>
      <div
        style={
          dropdownOpen
            ? { display: 'block', background: '#fff' }
            : { display: 'none', background: '#fff' }
        }
      >
        <DropdownMenu MaxWidthData={maxWidth}>
          <DropdownItem data={dataClick} changeItem={changeItem}></DropdownItem>
        </DropdownMenu>
      </div>
    </ButtonDropdown>
  );
}

export default DropdownGroup;
