import { useDispatch } from "react-redux";
import { createComment } from "../util/redux/comments/action";
import useInput from "./useInput";

export default function useForm() {
  const {
    value: imageValue,
    onChange: imageOnChange,
    clear: imageClear,
  } = useInput();
  const {
    value: authorValue,
    onChange: authorOnchange,
    clear: authorClear,
  } = useInput();
  const {
    value: contentValue,
    onChange: contentOnChange,
    clear: contentClear,
  } = useInput();
  const {
    value: createAtValue,
    onChange: createAtOnChange,
    clear: createAtClear,
  } = useInput();
  const dispatch = useDispatch();
  const clearAll = () => {
    imageClear();
    authorClear();
    contentClear();
    createAtClear();
  };
  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    dispatch(
      createComment({
        profile_url: imageValue,
        author: authorValue,
        content: contentValue,
        createdAt: createAtValue,
      })
    );
    clearAll();
  };
  return {
    imageValue,
    imageOnChange,
    authorValue,
    authorOnchange,
    contentValue,
    contentOnChange,
    createAtValue,
    createAtOnChange,
    formSubmitHandler,
  };
}
