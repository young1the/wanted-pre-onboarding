import styled from "styled-components";

export const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 12px;
    cursor: pointer;
    &:hover {
      background-color: #eeeeee;
    }
    font-size: 1rem;
  `,
  Strong: styled.p`
    font-weight: 800;
  `,
};
