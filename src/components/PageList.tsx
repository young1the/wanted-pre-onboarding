import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changePage } from "../util/redux/page/action";

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

type ButtonProps = {
  active: boolean;
};

const Page = styled.button<ButtonProps>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;

function PageList({ pageIndex, pageAmount }: any) {
  const pageArray = [];
  const dispatch = useDispatch();
  const onClickHandler = (i: number) => {
    dispatch(changePage({ pageIndex: i }));
  };
  for (let i = 1; i <= pageAmount; ++i)
    pageArray.push(
      <Page
        key={i}
        active={pageIndex === i}
        onClick={() => {
          if (pageIndex !== i)
            onClickHandler(i);
        }}
      >
        {i}
      </Page>
    );

  return <PageListStyle>{pageArray}</PageListStyle>;
}

export default PageList;
