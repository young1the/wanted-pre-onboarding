import Header from "./components/layout/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      <div className="w-screen h-screen flex justify-center items-center bg-sky-200">
        <div className="m-5 w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
