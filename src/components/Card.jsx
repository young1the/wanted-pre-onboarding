import Tag from "./Tag";

const Card = () => {

  return (
      <article 
      onClick={()=>{setClicked(true)}}
      className="w-full border border-gray-200 rounded-lg bg-white p-4 shadow-l hover:shadow-xl">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          10th Oct 2022
        </time>
        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            How to center an element using JavaScript and jQuery
          </h3>
        </a>
        <div className="mt-2 flex flex-wrap gap-1">
          <Tag name={"할일"}/>
          <Tag name={"진행중"}/>
        </div>
      </article>
  );
};

export default Card;
