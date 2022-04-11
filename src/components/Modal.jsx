import React, { useLayoutEffect, useEffect, useRef } from 'react';
import MicroModal from 'micromodal';
import './Modal.css';

const Modal = ({ modalId, title, children, isOpen, onClose }) => {
  const modalRef = useRef(null);
  
  MicroModal.init();

  useEffect(() => {
    if (isOpen === false) {
      MicroModal.show(modalRef.current.id);
      MicroModal.close(modalRef.current.id);
    }

    if(isOpen === true) {
      MicroModal.show(modalRef.current.id);
    }
  }, [ isOpen ]);
  
  return (
    <div id={`modal-${modalId}`} className="modal" aria-hidden="true" ref={modalRef}>
      <div tabIndex="-1" className="modal__overlay" data-micromodal-close>
        <div role="dialog" className="modal__container" aria-modal="true" aria-labelledby={`modal-${modalId}-title`} >
          <header className="modal__header">
            <h2 id={`modal-${modalId}-title`} className="modal__title">
              {title}
            </h2>
    
            <button aria-label="Close modal" className="modal__close" onClick={onClose}></button>
          </header>
    
          <div id={`modal-${modalId}-content`} className="modal__content">
            {children}
          </div>
    
        </div>
      </div>
    </div>
  )
}

export { Modal };