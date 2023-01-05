import { useQuery, useMutation, useQueryClient } from "react-query";
import { getIssues, updateIssueOrder } from "../apis/asyncFns";
import useDrag from "../hooks/useDrag";
import Card from "./Card";
import Loader from "./common/Loader";

const CardContainer = ({ type }) => {
  let { startRef, enterRef } = useDrag();
  const queryClient = useQueryClient();
  const { error, data, isLoading } = useQuery(
    type,
    () => {
      return getIssues(type);
    },
    {
      staleTime: 2000,
      keepPreviousData: true,
      onSuccess: () => {
        console.log(data, type);
      },
    }
  );
  const { mutate } = useMutation(updateIssueOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries(startRef.current.status);
      queryClient.invalidateQueries(enterRef.current.status);
    },
  });
  if (isLoading) return <Loader />;
  if (error) return <p>Error!</p>;

  const onDragStart = (e, ele) => {
    e.stopPropagation();
    startRef.current = { id: ele.id, status: ele.status };
  };
  const onDragEnter = (e, ele) => {
    e.stopPropagation();
    enterRef.current = { id: ele.id, status: ele.status };
  };
  const onDragEnd = (e) => {
    e.stopPropagation();
    if (
      startRef.current.id !== enterRef.current.id ||
      startRef.current.status !== enterRef.current.status
    )
      mutate({ prev: startRef.current, next: enterRef.current });
  };

  return (
    <>
      {data && data.length !== 0 ? (
        data.map((ele, idx) => {
          return (
            <div
              key={ele.id}
              draggable
              onDragStart={(e) => {
                onDragStart(e, ele, idx);
              }}
              onDragEnter={(e) => {
                onDragEnter(e, ele, idx);
              }}
              onDragEnd={(e) => {
                onDragEnd(e, ele, idx);
              }}
            >
              <Card
                title={ele.title}
                time={ele.time}
                managers={ele.managers}
                id={ele.id}
                key={ele.id}
                status={ele.status}
              />
            </div>
          );
        })
      ) : (
        <p>이슈가 없습니다.</p>
      )}
    </>
  );
};

export default CardContainer;
