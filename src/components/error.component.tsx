import { FC } from "react";
import { resetError } from "../signals/error.signals";

interface ErrorSnackbarProps {
  error: string;
}

export const ErrorSnackbar: FC<ErrorSnackbarProps> = ({ error }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-red-500 text-white p-4 z-50">
      <span className="mr-2" onClick={resetError}>
        ✖
      </span>
      {error}
    </div>
  );
};
