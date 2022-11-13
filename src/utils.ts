import DataBase from './Database.json';
import { SearchItemType } from './types';

export const getHistoryItemsFromLocalStorage = (): SearchItemType[] => {
  const searchedItems = localStorage.getItem("historyItems");
  return searchedItems && JSON.parse(searchedItems);
}

export const searchDatabase = (text: string) => DataBase.filter(({ title }) => title.toLowerCase().startsWith(text.toLowerCase()))

