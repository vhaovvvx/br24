import React from 'react';
import './MessageDialog.scss';

function MessageDialog(props) {

  const { title, content, position, iconType } = props

  return (
    <div className="message">
      <div className="message-dialog">
        <h5>{title}</h5>
        <p>{content}</p>
        <div className="message-group">
          <p className='link'>Text Link</p>
        </div>

        <div className={ iconType } id={position}>
          <div className='large-icon_content'></div>
        </div>
      </div>

    </div>
  )
}

export default MessageDialog
