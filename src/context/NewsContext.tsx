import { createContext } from 'react';
import { TheNewsType } from '../types';

type ContextType = {
  theNews: TheNewsType,
  setTheNews: (news: TheNewsType) => void,
  loading: boolean,
  filter: string,
  setFilter: (filter: string) => void,
  filteredContent: TheNewsType,
  favToRender: TheNewsType,
  setFavToRender: (news: TheNewsType) => void,
};

const NewsContext = createContext({} as ContextType);

export default NewsContext;
