import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "./useInput";
import ApiService from "../util/axios";
import { changePage } from "../util/redux/page/action";
import { formActions } from "../util/redux/form";
import { TComment } from "../types/comment";
import { getComments } from "../util/redux/comments/actions";

export type TUseFormInitialState = undefined | Omit<TComment, "id">;

export default function useForm() {
  const {
    value: imageValue,
    onChange: imageOnChange,
    clear: imageClear,
    setValue: profileSetValue,
  } = useInput();
  const {
    value: authorValue,
    onChange: authorOnchange,
    clear: authorClear,
    setValue: authorSetValue,
  } = useInput();
  const {
    value: contentValue,
    onChange: contentOnChange,
    clear: contentClear,
    setValue: contentSetValue,
  } = useInput();
  const {
    value: createAtValue,
    onChange: createAtOnChange,
    clear: createAtClear,
    setValue: createAtSetValue,
  } = useInput();

  const dispatch = useDispatch();
  const formState = useSelector<any, any>((state) => state.form);

  const changeValues = useCallback(() => {
    profileSetValue(formState.comment.profile_url);
    authorSetValue(formState.comment.author);
    contentSetValue(formState.comment.content);
    createAtSetValue(formState.comment.createdAt);
  }, [
    profileSetValue,
    authorSetValue,
    contentSetValue,
    createAtSetValue,
    formState.comment,
  ]);

  const clearAll = useCallback(() => {
    imageClear();
    authorClear();
    contentClear();
    createAtClear();
  }, [imageClear, authorClear, contentClear, createAtClear]);

  useEffect(() => {
    if (formState.comment) {
      changeValues();
    } else {
      clearAll();
    }
  }, [formState.comment, changeValues, clearAll]);

  const formSubmitHandler = async (e: any) => {
    e.preventDefault();
    dispatch(formActions.changeStatus("LOADING"));
    if (formState.formTodo === "POST") {
      await ApiService.postComment({
        profile_url: imageValue.current.value,
        author: authorValue.current.value,
        content: contentValue.current.value,
        createdAt: createAtValue.current.value,
      });
      dispatch(changePage(1));
    } else if (formState.formTodo === "PUT") {
      await ApiService.putComment({
        id: formState.comment.id,
        profile_url: imageValue.current.value,
        author: authorValue.current.value,
        content: contentValue.current.value,
        createdAt: createAtValue.current.value,
      });
      dispatch(getComments());
    }
    dispatch(formActions.solved());
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
