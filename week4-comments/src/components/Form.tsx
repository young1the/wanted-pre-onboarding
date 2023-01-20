import React from "react";
import styled from "styled-components";
import useForm from "../hooks/useForm";

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function Form() {
  const {
    profileRef,
    imageOnChange,
    authorRef,
    authorOnchange,
    contentRef,
    contentOnChange,
    createAtRef,
    createAtOnChange,
    formSubmitHandler,
  } = useForm();
  return (
    <FormStyle>
      <form>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          ref={profileRef}
          onChange={imageOnChange}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          ref={authorRef}
          onChange={authorOnchange}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          ref={contentRef}
          onChange={contentOnChange}
          required
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          ref={createAtRef}
          onChange={createAtOnChange}
          required
        />
        <br />
        <button type="submit" onClick={formSubmitHandler}>
          등록
        </button>
      </form>
    </FormStyle>
  );
}

export default Form;
