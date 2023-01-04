import { useEffect, useState } from "react";
import Card from "./Card";
import { requestAxios } from "../apis/axios";
import { getIssue } from "../apis/asyncFns";
import { useQuery } from "react-query";
import CardContainer from "./CardContainer";

const Section = ({ title }) => {

  return (
    <div className="block rounded-xl bg-white border border-gray-800 p-8 shadow-xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{title}</h1>
      <div className="space-y-4">
        <CardContainer/>
      </div>
    </div>
  );
};

export default Section;
