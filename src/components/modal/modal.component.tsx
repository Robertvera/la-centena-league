import { Signal } from "@preact/signals-react";
import { FC, ReactNode } from "react";
import { toggleModalOpen } from "../../signals/modal.signals";

interface ModalProps {
  isOpen: Signal<boolean>;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  const modalClasses = isOpen.value
    ? "fixed top-0 left-0 w-full h-full flex items-center justify-center"
    : "hidden";

  return (
    <div className={modalClasses}>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={toggleModalOpen}
      />
      <div className="bg-white p-4 rounded shadow-lg w-full max-w-md z-10 h-5/6">
        {children}
      </div>
    </div>
  );
};

export default Modal;
