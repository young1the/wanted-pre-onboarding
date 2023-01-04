import { useQuery } from "react-query";
import { getIssue } from "../apis/asyncFns";
import Card from "./Card";
import Loader from "./common/Loader";

const CardContainer = () => {
  const { isLoading, error, data } = useQuery("repoData", getIssue, {
    onSuccess: () => {
      console.log(data);
    },
  });
  if (isLoading) return <Loader/>;

  return (
    <>
      {data.length !== 0 ? (
        data.map((ele) => {
          return (
            <Card
              title={ele.title}
              time={ele.time}
              managers={ele.managers}
              id={ele.id}
              key={ele.id}
            />
          );
        })
      ) : (
        <p>이슈가 없습니다.</p>
      )}
    </>
  );
};

export default CardContainer;
