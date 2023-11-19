import { createContext } from 'react';
import { TheNewsType } from '../types';

type ContextType = {
  theNews: TheNewsType,
  setTheNews: (news: TheNewsType) => void,
  loading: boolean,
};

const NewsContext = createContext({} as ContextType);

export default NewsContext;
