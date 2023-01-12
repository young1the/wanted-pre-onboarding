import styled from "styled-components";

export const Styled = {
  Wrapper: styled.div<{isFocused?:boolean}>`
    display: flex;
    flex-wrap: wrap;
    padding: 12px;
    cursor: pointer;
    &:hover {
      background-color: #eeeeee;
    }
    background-color: ${props => props.isFocused? "#eeeeee" : "#fff"};
    font-size: 1rem;
  `,
  Strong: styled.p`
    font-weight: 800;
  `,
};
