import { createContext, useState, FC, PropsWithChildren } from "react";
import { getHistoryItemsFromLocalStorage } from "../utils";
import { SearchItemType, ResultsContextType } from "../types";

export const SearchContext = createContext<ResultsContextType | []>([]);

const SearchProvider: FC<PropsWithChildren> = ({ children }) => {
  const [results, setResults] = useState<SearchItemType[]>([]);
  const [historyItems, setHistoryItems] = useState<SearchItemType[]>(
    getHistoryItemsFromLocalStorage()
  );

  console.log(getHistoryItemsFromLocalStorage());

  const updateResults = (results: SearchItemType[]) => {
    setResults([...results]);
  };

  const addHistoryItem = (historyItem: SearchItemType) => {
    if (!historyItems) {
      localStorage.setItem("historyItems", JSON.stringify([historyItem]));
      setHistoryItems([historyItem]);
      return;
    }

    const isItemIncluded = historyItems.find(
      (item) => item.title === historyItem.title
    );

    if (!isItemIncluded) {
      const updatedSearchedList = [...historyItems, historyItem];

      localStorage.setItem("historyItems", JSON.stringify(updatedSearchedList));
      setHistoryItems(updatedSearchedList);
    }
  };

  const removeHistoryItem = (historyItemId: string) => {
    const updatedHistoryList = historyItems.filter(
      (item) => item.id !== historyItemId
    );

    console.log({ updatedHistoryList });
    console.log("wasup");
    localStorage.setItem("historyItems", JSON.stringify(updatedHistoryList));
    setHistoryItems([...updatedHistoryList]);
  };

  return (
    <SearchContext.Provider
      value={{
        results,
        historyItems,
        updateResults,
        addHistoryItem,
        removeHistoryItem,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
