import { useState, useRef } from "react";

export default function useInput(prevValue) {
  const [value, setValue] = useState(prevValue);
  const ref = useRef(null);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange, ref, set: setValue };
}
