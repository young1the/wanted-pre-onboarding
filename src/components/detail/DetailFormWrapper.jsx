import { useQuery } from "react-query";
import { getIssueById } from "../../apis/asyncFns";
import { useDetailState } from "../../hooks/useDetail";
import Loader from "../common/Loader";
import DetailForm from "./detailForm";

const DetailFormWrapper = () => {
  const {issueStat} = useDetailState();
  const { isLoading, error, data } = useQuery(
    "detail",
    () => { return getIssueById({status:issueStat.status, id:issueStat.id});},
    {
      onSuccess: () => {
        console.log(data);
      },
    }
  );
  if (isLoading) {
    return <Loader />;
  }
  if (error) return <p>Error!</p>;
  return <DetailForm props={data}/>;
  // return <></>
};

export default DetailFormWrapper;
