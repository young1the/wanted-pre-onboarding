import { useMutation, useQueryClient } from "react-query";
import { updateIssueOrder } from "../apis/asyncFns";
import useDrag from "../hooks/useDrag";
import Loader from "./common/Loader";
import Card from "./Card"
import { useState } from "react";

const DraggableCard = ({ title, time, managers, id, status }) => {
  let { startRef, enterRef } = useDrag();
  const queryClient = useQueryClient();
  const { mutate, isLoading, error } = useMutation(updateIssueOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries(startRef.current.status);
      queryClient.invalidateQueries(enterRef.current.status);
    },
  });
  const onDragStart = (e) => {
    e.stopPropagation();
    startRef.current = { id, status };
  };
  const onDragEnter = (e) => {
    e.stopPropagation();
    enterRef.current = { id, status };
  };
  const onDragEnd = (e) => {
    e.stopPropagation();
    if (
      startRef.current.id !== enterRef.current.id ||
      startRef.current.status !== enterRef.current.status
    )
      mutate({ prev: startRef.current, next: enterRef.current });
  };

  if (isLoading) return <Loader />;
  if (error) return <p>Error!</p>;
  return (
    <div
      key={id}
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
    >
      <Card
        title={title}
        time={time}
        managers={managers}
        id={id}
        key={id}
        status={status}
      />
    </div>
  );
};

export default DraggableCard;
