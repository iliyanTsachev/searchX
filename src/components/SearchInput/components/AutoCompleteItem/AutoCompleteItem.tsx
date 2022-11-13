import {
  ListItem,
  Title,
  FlexWrapper,
  ClockIcon,
} from "./AutoCompleteItem.theme";
import { EyeglassIcon, DeletelButton } from "../../Search.theme";
import { useState } from "react";
import { SearchItemType } from "../../../../types";

interface Props {
  item: SearchItemType;
  handleRemoveHistoryItem: (id: string) => void;
  handleItemClick: (id: string) => void;
}

export const AutoCompleteItem = ({
  item,
  handleRemoveHistoryItem,
  handleItemClick,
}: Props) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  const handleHover = () => setShowDeleteIcon(!showDeleteIcon);

  return (
    <ListItem onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <FlexWrapper onClick={() => handleItemClick(item.title)}>
        {item.isHistoryItem ? <ClockIcon /> : <EyeglassIcon />}
        <Title>{item.title}</Title>
      </FlexWrapper>
      {item.isHistoryItem && showDeleteIcon && (
        <div onClick={() => handleRemoveHistoryItem(item.id)}>
          <DeletelButton />
        </div>
      )}
    </ListItem>
  );
};
