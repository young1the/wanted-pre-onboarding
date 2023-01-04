import Tag from "./Tag";

const Card = ({title, time, managers, id}) => {

  return (
      <article
      onClick={()=>{}}
      className="w-full border border-gray-200 rounded-lg bg-white p-4 shadow-l hover:shadow-xl">
        <time dateTime={time} className="block text-xs text-gray-500">
          {time}
        </time>
        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {title}
          </h3>
        </a>
        <div className="mt-2 flex flex-wrap gap-1">
          {managers.map((ele)=>{
            return <Tag name={ele.name} key={ele.name} />
          })}
        </div>
      </article>
  );
};

export default Card;
