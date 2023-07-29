import React from "react";
import { usePopupClose } from "../hooks/usePopupClose";

function PopupWithForm({ title, name, btnText, children, isOpen, onClose, onSubmit, buttonStyles="" }) {

  usePopupClose(isOpen, onClose);

  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose} />
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          {children &&
            <div className="popup__inputs">
              {children}
            </div>
          }
          <button className={`popup__save-button ${buttonStyles}`} type="submit">{btnText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;