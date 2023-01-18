import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "./useInput";
import ApiService from "../util/axios";
import { changePage } from "../util/redux/page/action";
import { formActions } from "../util/redux/form";
import { getComments } from "../util/redux/comments/actions";

export default function useForm() {
  const {
    ref: profileRef,
    onChange: imageOnChange,
    clear: imageClear,
    setValue: profileSetValue,
  } = useInput();
  const {
    ref: authorRef,
    onChange: authorOnchange,
    clear: authorClear,
    setValue: authorSetValue,
  } = useInput();
  const {
    ref: contentRef,
    onChange: contentOnChange,
    clear: contentClear,
    setValue: contentSetValue,
  } = useInput();
  const {
    ref: createAtRef,
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
        profile_url: profileRef.current.value,
        author: authorRef.current.value,
        content: contentRef.current.value,
        createdAt: createAtRef.current.value,
      });
      dispatch(changePage(1));
    } else if (formState.formTodo === "PUT") {
      await ApiService.putComment({
        id: formState.comment.id,
        profile_url: profileRef.current.value,
        author: authorRef.current.value,
        content: contentRef.current.value,
        createdAt: createAtRef.current.value,
      });
      dispatch(getComments());
    }
    dispatch(formActions.solved());
    clearAll();
  };

  return {
    profileRef,
    imageOnChange,
    authorRef,
    authorOnchange,
    contentRef,
    contentOnChange,
    createAtRef,
    createAtOnChange,
    formSubmitHandler,
  };
}
