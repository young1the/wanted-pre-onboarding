import React from "react";
import Section from "../components/Section";
import { DragContextProvider } from "../store/DragContext";

const Root = () => {
  return (
    <DragContextProvider>
      <div className="w-screen max-h-max min-h-screen flex justify-center items-center bg-sky-100">
        <div className="max-w-[90rem] w-full grid grid-cols-1 mt-[8rem] gap-8 mx-8 md:grid-cols-2 lg:grid-cols-3">
          <Section title="할 일" type="TODO" />
          <Section title="진행중" type="PROGRESS" />
          <Section title="완료" type="COMPLETE" />
        </div>
      </div>
    </DragContextProvider>
  );
};

export default Root;
