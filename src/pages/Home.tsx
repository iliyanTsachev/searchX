import { Search } from "../components/SearchInput/Search";
import { Wrapper, Title } from "./Home.theme";

export const HomePage = () => {
  return (
    <Wrapper>
      <Title>Search X</Title>
      <Search />
    </Wrapper>
  );
};
