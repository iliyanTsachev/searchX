import { useContext } from "react";
import { SearchContext } from "../context/searchContext";
import type { ResultsContextType } from "../types";
import { SearchItem } from "../components/SearchItem/SearchItem";
import { Search } from "../components/SearchInput/Search";
import {
  Wrapper,
  Navigation,
  Logo,
  ContentWrapper,
  NoResultMessage,
} from "./SearchResults.theme";

export const SearchResultsPage = () => {
  const { results } = useContext(SearchContext) as ResultsContextType;

  return (
    <Wrapper>
      <Navigation>
        <Logo>SearchX</Logo>
        <Search />
      </Navigation>
      <ContentWrapper>
        {results.length ? (
          results.map((item) => <SearchItem key={item.id} item={item} />)
        ) : (
          <NoResultMessage>
            Sorry, your search has no matches :(
          </NoResultMessage>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};
