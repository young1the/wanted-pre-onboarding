import Card from "./Card";

const Section = ({title}) => {
  return (
    <div className="block rounded-xl bg-white border border-gray-800 p-8 shadow-xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{title}</h1>
      <div className="space-y-4">
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  );
};

export default Section;
