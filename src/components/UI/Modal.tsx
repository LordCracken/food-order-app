import { createPortal } from 'react-dom';

import { IBackdrop, IModal, IModalOverlay } from '../../interfaces';
import classes from './Modal.module.css';

const Backdrop = ({ onClose }: IBackdrop) => <div className={classes.backdrop} onClick={onClose} />;

const ModalOverlay = ({ children }: IModalOverlay) => (
  <div className={classes.modal}>
    <div>{children}</div>
  </div>
);

const Modal = ({ children, onClose }: IModal) => (
  <>
    {createPortal(<Backdrop onClose={onClose} />, document.getElementById('overlays')!)}
    {createPortal(<ModalOverlay>{children}</ModalOverlay>, document.getElementById('overlays')!)}
  </>
);

export default Modal;
