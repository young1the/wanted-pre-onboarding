import React from "react";
import PageList from "../components/PageList";
import { useSelector } from "react-redux";

function PageListContainer() {
  const { pageIndex, pageAmount } = useSelector<any, any>(
    (state) => state.page
  );
  return <PageList pageIndex={pageIndex} pageAmount={pageAmount} />;
}

export default PageListContainer;
