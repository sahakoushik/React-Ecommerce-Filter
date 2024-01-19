
import{ FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    open: boolean;
    children: ReactNode;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ open, children, onClose }) => {
    if (!open) return null;
  
    return ReactDOM.createPortal(
      <>
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-slate-500 opacity-70 z-1000" onClick={onClose}></div>
        <div className="fixed z-10050 -translate-x-2/4 -translate-y-2/4  left-1/2 top-1/2">
          <button className='text-white font-bold bg-red-500 absolute -right-5 -top-3 p-2 size-12 rounded-full' onClick={onClose}>X</button>
          {children}
        </div>
      </>,
      document.getElementById("customModal")!
    );
  }
  
export default Modal;