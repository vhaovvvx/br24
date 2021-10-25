import { useState } from 'react';
import './App.css';
import { ArrowDown } from './components/font-icons/icons/AngryRegular';
import ButtonDropdown from './components/view/ButtonDropdown/ButtonDropdown';
import DropdownItem from './components/view/DropdownItem/DropdownItem';
import DropdownMenu from './components/view/DropdownMenu/DropdownMenu';
import DropdownToggle from './components/view/DropdownToggle/DropdownToggle';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className='App'>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color='red'>
          ssss
          <ArrowDown></ArrowDown>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>1</DropdownItem>
          <DropdownItem>2</DropdownItem>
          <DropdownItem>3</DropdownItem>
          <DropdownItem>4</DropdownItem>
          <DropdownItem>5</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
}

export default App;
