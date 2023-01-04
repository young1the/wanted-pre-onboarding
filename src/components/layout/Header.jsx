import { BackDrop } from "../modal/BackDrop";
import IssueForm from "../issue/IssueForm";
import useToggle from "../../hooks/useToggle";
import Button from "../common/Button";

const Header = () => {
  const { state: modal, on: onModal, off: offModal } = useToggle();

  return (
    <>
      <header aria-label="Page Header">
        <div className="absolute top-0 w-screen h-28 px-8 py-8 bg-white border-b rounded-b-xl border-gray-800">
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent">
                Wanted
              </span>
              <span className="text-2xl font-bold text-gray-900">
                Wemade Issue Tracking
              </span>
            </div>
            <Button onClick={onModal}/>
          </div>
        </div>
      </header>
      {modal ? (
        <BackDrop offModal={offModal}>
          <IssueForm />
        </BackDrop>
      ) : null}
    </>
  );
};

export default Header;
