import { useState } from "react";

const useModal = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const onModal = () => {
    setIsModalOn(true);
  };
  const offModal = () => {
    setIsModalOn(false);
  };
  return { isModalOn, onModal, offModal };
};

export default useModal;
