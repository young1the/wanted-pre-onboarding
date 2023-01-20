import styled from "styled-components";

export const Styled = {
  Container: styled.div`
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgb(30 32 37 / 10%);
    border-radius: 42px;
    width: 420px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Input: styled.input`
    flex: 1;
    width: 100%;
    border: 0;
    padding: 16px;
    display: flex;
    align-items: center;
    font-size: 1.125rem;
    &:focus {
      outline: none;
    }
  `,
  Button: styled.button`
    background-color: #007be9;
    width: 48px;
    height: 48px;
    border: 0;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    cursor: pointer;
  `,
};
