import React from 'react';
import './OutLineButton.scss';

function OutLineButton(props) {

  const { mw, display, order, hanldeClick, disabled }  = props

  const activeStyle = {
    maxWidth: mw
  }

  const icons = {
    display: display,
    order: order
  }

  const disabledStyle = {
    maxWidth: mw,
    border: "1px solid #DBE0E6",
    cursor: "not-allowed",
    color: "DBE0E6",
    boxShadow: "none"
  }

return (
  <div className='ol-buttons'>
    <button 
      className='ol-button-group' 
      style={disabled ? disabledStyle : activeStyle}
      onClick={hanldeClick}
      >
      <div style={icons} className='ol-icons-content'></div>
      <span>BUTTON</span>
    </button>
  </div>
  )
}

export default OutLineButton
