import ReactDOM from "react-dom";

function ModalPortal({ children }) {
  const modalElement = document.querySelector("#modal");
  return ReactDOM.createPortal(children, modalElement);
}

export const BackDrop = ({ children, offModal }) => {
  return (
    <ModalPortal>
      <div
        className="absolute top-0 w-screen h-screen 
        flex justify-center items-center bg-gray-700 bg-opacity-75"
        onClick={offModal}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};
