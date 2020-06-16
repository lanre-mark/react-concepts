import React from 'react';
import ReactDOM from 'react-dom';
import PopupForm from './PopupForm';
import CloseIcon from './close-icon';

import './Popup.scss';

const PopupModal = ({
  onClickModal,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  onSubmit,
}) => {
  return ReactDOM.createPortal(
    // <FocusTrap>
    <aside
      tag='aside'
      role='dialog'
      tabIndex='-1'
      aria-modal='true'
      className='modal__cover'
      onClick={onClickModal}
      onKeyDown={onKeyDown}
    >
      <div className='modal__area' ref={modalRef}>
        <button
          ref={buttonRef}
          aria-label='Close Modal'
          aria-labelledby='close-modal'
          className='modal__close'
          onClick={closeModal}
        >
          <span id='close-modal' className='modal__hide-visual'>
            Close
          </span>
          <CloseIcon />
        </button>
        <div className='modal__body'>
          <PopupForm onSubmit={onSubmit} />
        </div>
      </div>
    </aside>,
    // </FocusTrap>,
    document.body
  );
};

export default PopupModal;
