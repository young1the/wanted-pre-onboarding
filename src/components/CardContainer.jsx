import { isError, useQuery } from "react-query";
import { getIssues } from "../apis/asyncFns";
import Card from "./Card";
import Loader from "./common/Loader";

const CardContainer = () => {
  const { isLoading, error, data } = useQuery("issues", getIssues, {
    onSuccess: () => {
    },
  });
  if (isLoading) return <Loader/>;
  if (error) return <p>Error!</p>

  return (
    <>
      {data?.length !== 0 ? (
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
