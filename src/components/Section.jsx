import { useEffect, useState } from "react";
import Card from "./Card";
import { requestAxios } from "../apis/axios";
import { getIssue } from "../apis/asyncFns";

const Section = ({ title }) => {
  const [issues, setIssues] = useState([]);
  const fetchIssues = async () => {
    const [data, error] = await requestAxios(getIssue());
    if (data) {
      console.log(data);
      await setIssues([...data]);
    }
    if (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div className="block rounded-xl bg-white border border-gray-800 p-8 shadow-xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{title}</h1>
      <div className="space-y-4">
        {issues.length !==0 ? issues.map((ele)=>{
          return <Card title={ele.title}
           time={ele.time}
           managers={ele.managers}
           id={ele.id}
           key={ele.id} />
        }) : null}
      </div>
    </div>
  );
};

export default Section;
