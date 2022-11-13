export interface SearchItemType {
  id: string;
  title: string;
  description?: string;
  isHistoryItem?: boolean;
}

export type ResultsContextType = {
  results: SearchItemType[];
  historyItems: SearchItemType[];
  updateResults: (results: SearchItemType[]) => void;
  addHistoryItem: (historyItem: SearchItemType) => void;
  removeHistoryItem: (historyItemId: string) => void;
};