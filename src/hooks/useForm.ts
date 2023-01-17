import { useDispatch, useSelector } from "react-redux";
import useInput from "./useInput";
import ApiService from "../util/axios";
import { changePage } from "../util/redux/page/action";
import { formActions } from "../util/redux/form";

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
  const formState = useSelector<any, any>(state=>state.form);
  const clearAll = () => {
    imageClear();
    authorClear();
    contentClear();
    createAtClear();
  };

  const formSubmitHandler = async (e: any) => {
    e.preventDefault();
    dispatch(formActions.changeStatus("LOADING"));
    await ApiService.postComment({
      profile_url: imageValue,
      author: authorValue,
      content: contentValue,
      createdAt: createAtValue,
    });
    dispatch(formActions.changeStatus("DONE"));
    dispatch(changePage(1));
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
