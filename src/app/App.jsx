import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Main from "../components/layouts/Main";
import Test from "../components/test/Test";
import "./App.css";
import PageLoader from "../components/tools/PageLoader";

const queryClient = new QueryClient();

// Lazy-loaded pages
const HomePage = lazy(() => import("../pages/HomePage"));
const FavouritePage = lazy(() => import("../pages/FavouritePage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));
const SearchPage = lazy(() => import("../pages/SearchPage"));


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-3xl font-bold">
        <Router>
          <Main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favourite" element={<FavouritePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/test" element={<Test />} />
              </Routes>
            </Suspense>
          </Main>
        </Router>
      </div>

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
