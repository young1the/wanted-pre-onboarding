import { BackDrop } from "../modal/BackDrop";
import IssueForm from "../issue/IssueForm";
import useToggle from "../../hooks/useToggle";
import Button from "../common/Button";
import { useDetailDispatch, useDetailState } from "../../hooks/useDetail";
import DetailFormWrapper from "../detail/DetailFormWrapper";
import { useQueryClient } from "react-query";

const Header = () => {
  const queryClient = useQueryClient();
  const { state: modal, on: onModal, off: offModal } = useToggle();
  const popupState = useDetailState();
  const dispatch = useDetailDispatch();

  return (
    <>
      <header aria-label="Page Header">
        <div className="absolute top-0 w-screen h-28 px-8 py-8 bg-white border-b rounded-b-xl border-gray-800">
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent">
                Wanted
              </span>
              <span className="text-2xl font-bold text-gray-900 invisible md:visible">
                Wemade Issue Tracking
              </span>
            </div>
            <Button onClick={onModal} title="Create Issue"/>
          </div>
        </div>
      </header>
      {modal ? (
        <BackDrop offModal={offModal}>
          <IssueForm />
        </BackDrop>
      ) : null}
      {
        popupState.popup ? (
          <BackDrop offModal={()=>{
            queryClient.invalidateQueries('datail');
            dispatch({type: "OFF"});}}>
          <DetailFormWrapper />
        </BackDrop>
        ) : null
      }
    </>
  );
};

export default Header;
