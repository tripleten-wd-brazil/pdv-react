import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return [isModalOpen, handleOpenModal, handleClose];
};
