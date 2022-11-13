import {
  SearchInput,
  EyeglassIconSearchInput,
  DeletelButtonSearchInput,
  Wrapper,
  Hr,
} from "./Search.theme";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { AutoCompleteItem } from "./components/AutoCompleteItem/AutoCompleteItem";
import { searchDatabase, getHistoryItemsFromLocalStorage } from "../../utils";
import { v4 as uuidv4 } from "uuid";
import type { SearchItemType, ResultsContextType } from "../../types";
import { SearchContext } from "../../context/searchContext";

// Notice: Once the screen loads you need to auto focus the search input
// Notice: Once you focus the input you need to check if there are autocomplete items in memory and if yes then you need to show them like on the screenshot above.
//If we implement both of those it means that when the page loads we need to focus and show searched items strait away whitch is not the best UX. I won't implement focus on load because of that, but it can be done by adding "autofocus" attribute to the input or using a ref from react and focusing in an "useEffect" hook.

export const Search = () => {
  const [text, setText] = useState("");
  const wrapper = useRef(null);
  const navigate = useNavigate();
  const { updateResults, historyItems, addHistoryItem, removeHistoryItem } =
    useContext(SearchContext) as ResultsContextType;

  const [resultsToDisplay, setResultsToDisplay] = useState<SearchItemType[]>(
    []
  );

  const shouldShowList = resultsToDisplay?.length > 0;
  const handleFocus = () => {
    setResultsToDisplay(historyItems);
  };

  const clearResults = () => setResultsToDisplay([]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addHistoryItem({
        id: uuidv4(),
        title: text,
        isHistoryItem: true,
      });
      updateResults(searchDatabase(text));
      setResultsToDisplay([]);
      navigate("/search");
    }
  };

  const searchItems = (searchText: string) => {
    if (!searchText || searchText.length <= 1) {
      if (resultsToDisplay) clearResults();
      return;
    }

    const resultsFromDatabase = searchDatabase(searchText);
    const resultsFromHistoryItems = getHistoryItemsFromLocalStorage()?.filter(
      ({ title }) => title.toLowerCase().startsWith(searchText.toLowerCase())
    );

    if (resultsFromHistoryItems) {
      setResultsToDisplay(
        [...resultsFromHistoryItems, ...resultsFromDatabase].slice(0, 10)
      );
      return;
    }

    setResultsToDisplay([...resultsFromDatabase].slice(0, 10));
  };

  const handleRemoveHistoryItem = (id: string) => {
    removeHistoryItem(id);
    searchItems(text);
  };

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    setText(value);
    searchItems(value);
  };

  const handleItemClick = (title: string) => {
    addHistoryItem({
      id: uuidv4(),
      title: title,
      isHistoryItem: true,
    });
    updateResults(searchDatabase(title));
    setResultsToDisplay([]);
    navigate("/search");
  };

  return (
    <Wrapper shoudlShowShadow={shouldShowList} ref={wrapper}>
      <SearchInput
        shoudlshowshadow={!shouldShowList}
        name="searchInput"
        placeholder="What are you looking for?"
        value={text}
        onKeyPress={handleKeyPress}
        onChange={handleInputChange}
        onFocus={handleFocus}
        autoComplete="off"
      />
      <EyeglassIconSearchInput />
      <DeletelButtonSearchInput onClick={() => setText("")} />
      {resultsToDisplay && (
        <>
          <Hr />
          {resultsToDisplay.map((item) => (
            <AutoCompleteItem
              key={item.id}
              item={item}
              handleRemoveHistoryItem={handleRemoveHistoryItem}
              handleItemClick={handleItemClick}
            />
          ))}
        </>
      )}
    </Wrapper>
  );
};
