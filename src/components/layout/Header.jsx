import { BackDrop } from "../modal/BackDrop";
import IssueForm from "../IssueForm";
import useModal from "../../hooks/useModal";

const Header = () => {
  const { isModalOn, onModal, offModal } = useModal();

  return (
    <>
      <header aria-label="Page Header">
        <div className="absolute top-0 w-screen h-28 px-4 py-8 bg-white">
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent">
                Wanted
              </span>
              <span className="text-2xl font-bold text-gray-900">
                Wemade Issue Tracking
              </span>
            </div>
            <button
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              onClick={onModal}
            >
              Create Issue
            </button>
          </div>
        </div>
      </header>
      {isModalOn ? (
        <BackDrop offModal={offModal}>
          <IssueForm />
        </BackDrop>
      ) : null}
    </>
  );
};

export default Header;
