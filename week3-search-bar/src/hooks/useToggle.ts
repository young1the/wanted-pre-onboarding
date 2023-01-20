import { useState } from "react";

const useToggle = (initialState = false) => {
  const [isOn, setIsOn] = useState(initialState);
  const on = () => {
    setIsOn(true);
  };
  const off = () => {
    setIsOn(false);
  };
  const toggle = () => {
    setIsOn((prev) => !prev);
  };
  return { isOn, on, off, toggle };
};

export default useToggle;
