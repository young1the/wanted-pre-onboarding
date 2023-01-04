import { useQuery } from "react-query";
import { getIssueById } from "../../apis/asyncFns";
import { useDetailState } from "../../hooks/useDetail";
import Loader from "../common/Loader";
import DetailForm from "./detailForm";

const DetailFormWrapper = () => {
  const detailState = useDetailState();
  const { isLoading, error, data } = useQuery(
    "issue",
    () => { return getIssueById(detailState.id);},
    {
      onSuccess: () => {},
    }
  );
  if (isLoading) {
    return <Loader />;
  }
  if (error) return <p>Error!</p>;
  return <DetailForm props={data}/>;
};

export default DetailFormWrapper;
