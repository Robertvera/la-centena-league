import { FC } from "react";

interface ModalTitleProps {
  text: string;
}

export const ModalTitle: FC<ModalTitleProps> = ({ text }) => {
  return (
    <h1 className="text-2xl font-bold text-primary text-center">{text}</h1>
  );
};
