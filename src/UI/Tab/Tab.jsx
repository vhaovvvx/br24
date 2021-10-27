import React, { useState } from 'react';
import './Tab.scss';

function Tab(props) {
  const { tabs } = props
  const [active, setActive] = useState(tabs[0])
  
  const changeTab = (value) => {
    setActive(value)
  }

  return (
    <div className='tab'>
      <ul>
        {tabs.map((tab) => {
          return(
            <li 
              key={tab} 
              className={active === tab ? 'active' : ''} 
              onClick={() => changeTab(tab)}
            >{tab}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tab
