import { useState } from "react";

export const useModal = (initialState = false) => {
  const [isOpened, setOpened] = useState(initialState);
  const close = () => setOpened(false);
  const open = () => setOpened(true);

  return {
    isOpened,
    close,
    open,
  };
};
