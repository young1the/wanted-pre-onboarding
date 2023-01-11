import styled from "styled-components";

export const Styled = {
  Wrapper: styled.div`
    display: flex;
    padding: 12px;
    cursor: pointer;
    &:hover {
      background-color: #eeeeee;
    }
    font-size: 1rem;
  `,
  Strong: styled.strong`
    font-weight: 800;
  `,
};
