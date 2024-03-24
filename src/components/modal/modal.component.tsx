import { FC, ReactNode } from "react";
import {
  modalState,
  Modal as ModalInterface,
  toggleModalState,
} from "../../signals/modal.signals";

interface ModalProps {
  type: keyof ModalInterface;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ type, children }) => {
  const modalClasses = modalState.value[type].isOpen
    ? "fixed top-0 left-0 w-full h-full flex items-center justify-center"
    : "hidden";

  return (
    <div className={modalClasses}>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={() => toggleModalState(type)}
      />
      <div className="bg-white p-4 rounded shadow-lg w-full max-w-md z-10 h-5/6">
        {children}
      </div>
    </div>
  );
};

export default Modal;
