import React, { useState } from "react";

export default function useInput(initialState = "") {
  const [value, setValue] = useState(initialState);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange, setValue };
}
