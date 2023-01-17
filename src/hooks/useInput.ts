import { useState } from "react";

export default function useInput(initialState = "") {
  const [value, setValue] = useState(initialState);
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };
  const clear = () => {
    setValue("");
  };
  return { value, onChange, clear };
}
