import Header from "./components/layout/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      <div className="w-screen sm:h-auto md:h-screen flex justify-center items-center bg-sky-200">
        <div className="max-w-[90rem] w-full grid grid-cols-1 gap-8 mx-8 mt-48 mb-24 md:grid-cols-2 lg:grid-cols-3 lg:my-0">
          <Section title="할 일"/>
          <Section title="진행중"/>
          <Section title="완료"/>
        </div>
      </div>
    </>
  );
}

export default App;

//https://www.hyperui.dev/components/marketing/blog-cards
