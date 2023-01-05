import useDrag from "../hooks/useDrag";
import CardContainer from "./CardContainer";

const Section = ({ title, type }) => {
  const { enterRef } = useDrag();
  const onDragEnterField = (e) => {
    const offset = e.target.offsetParent.nodeName === "DIV" ?
    e.target.offsetParent : e.target;
    const offsetTop = offset.offsetTop;
    const offsetHeight = offset.offsetHeight;
    const offsetHalf = (offsetHeight - offsetTop + 150) / 2;
    const clientY = e.clientY;
    const id = (clientY < offsetHalf) ? "top" : "bottom";
    enterRef.current = {id: id, status: type};
  };
  
  return (
    <div
      className="relative rounded-xl bg-white border border-gray-800 p-8 shadow-xl"
      onDragEnter={onDragEnterField}
    >
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{title}</h1>
      <CardContainer type={type} />
    </div>
  );
};

export default Section;
