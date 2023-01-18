import { useRef } from "react";

type HTMLInputLikeElement = HTMLInputElement | HTMLTextAreaElement;

export default function useInput() {
  const ref = useRef<any>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputLikeElement>) => {
    if (ref.current) ref.current.value = event.target.value;
  };

  const clear = () => {
    if (ref.current) ref.current.value = "";
  };

  const setValue = (value: string) => {
    if (ref.current) ref.current.value = value;
  };

  return { value: ref, onChange, clear, setValue };
}
