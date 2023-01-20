import { useState } from "react";

const useToggle = () => {
  const [state, setToggle] = useState(false);
  const on = () => {
    setToggle(true);
  };
  const off = () => {
    setToggle(false);
  };
  const toggle = () => {
    setToggle((prev)=>!prev);
  }
  return { state, on, off, toggle };
};

export default useToggle;
