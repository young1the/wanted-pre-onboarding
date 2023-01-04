import Header from "./components/layout/Header";
import Section from "./components/Section";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { DetailContextProvider } from "./store/cardDetailContext";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DetailContextProvider>
          <Header />
          <div className="w-screen max-h-max min-h-screen flex justify-center items-center bg-sky-200">
            <div className="max-w-[90rem] w-full grid grid-cols-1 mt-[8rem] gap-8 mx-8 md:grid-cols-2 lg:grid-cols-3">
              <Section title="할 일" />
              <Section title="진행중" />
              <Section title="완료" />
            </div>
          </div>
        </DetailContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

//https://www.hyperui.dev/components/marketing/blog-cards
