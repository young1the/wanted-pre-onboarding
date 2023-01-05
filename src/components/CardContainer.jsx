import { useQuery } from "react-query";
import { getIssues } from "../apis/asyncFns";
import Card from "./Card";
import Loader from "./common/Loader";

const CardContainer = ({type}) => {
  const { isLoading, error, data } = useQuery(type, ()=>{
    return getIssues(type)}, {
    onSuccess: () => {
    },
  });
  if (isLoading) return <Loader/>;
  if (error) return <p>Error!</p>

  return (
    <>
      {
      data?.length !== 0 ? (
        data.map && data.map((ele) => {
          return (
            <Card
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
