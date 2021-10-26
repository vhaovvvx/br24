import React from "react";
import "./ModalDialog.scss";
import Button from "../Button/Button";
import OutLineButton from "../Button/OutLineButton";

function ModalDialog(props) {

  const { title, content, btnTitle } = props

  return (
    <div className="modal">
      <div className="modal-dialog">
        <h5>{title}</h5>
        <p>{content}</p>
        <div className="modal-group">
          <OutLineButton mw="109px" display="none" bgc="#FFF" btnTitle={btnTitle} />
          <Button mw="109px" display="none" bgc="#0D004C" btnTitle={btnTitle} />
        </div>
      </div>
    </div>
  );
}

export default ModalDialog;
