import styled from "styled-components";

export const Styled = {
  Wrapper: styled.div`
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgb(30 32 37 / 10%);
    width: 420px;
    padding: 12px;
    position: absolute;
    margin-top: 0.5rem;
    border-radius: 42px;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
  `,
  Title: styled.div`
    color: gray;
    margin-bottom: 1rem;
    font-size: 0.8rem;
  `,
  List: styled.div`
    max-height: 420px;
    min-height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
    margin: auto 0;
    &::-webkit-scrollbar {
      width: 0.8rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #007be9;
      border-radius: 24px;
    }
  `,
};
