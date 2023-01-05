import Header from "./components/layout/Header";
import Root from "./page/Root";

import { QueryClient, QueryClientProvider } from "react-query";
import { DetailContextProvider } from "./store/DetailContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DetailContextProvider>
          <Header />
          <Root />
        </DetailContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

//https://www.hyperui.dev/components/marketing/blog-cards
