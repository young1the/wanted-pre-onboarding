import { useQuery } from "react-query";
import { getIssues } from "../apis/asyncFns";
import Loader from "./common/Loader";
import DraggableCard from "./DraggableCard";

const CardContainer = ({ type }) => {
  const { error, data, isLoading } = useQuery(
    type,
    () => {
      return getIssues(type);
    },
    {
      staleTime: 2000,
      keepPreviousData: true,
      onSuccess: () => {
      },
    }
  );
  if (isLoading) return <Loader />;
  if (error) return <p>Error!</p>;

  return (
    <>
      {data && data.length !== 0 ? (
        data.map((ele) => {
          return (
            <DraggableCard
              title={ele.title}
              time={ele.time}
              managers={ele.managers}
              id={ele.id}
              key={ele.id}
              status={ele.status}
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
