import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { SearchResultsPage } from "./pages/SearchResults";

export const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("historyItems")) {
      localStorage.setItem("historyItems", JSON.stringify([]));
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </div>
  );
};

export default App;
