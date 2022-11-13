import { Description, Title } from "./SearchItem.theme";
import { SearchItemType } from "../../types";

interface Props {
  item: SearchItemType;
}

export const SearchItem = ({ item }: Props) => {
  return (
    <div>
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
    </div>
  );
};
