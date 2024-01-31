import { CharacterType } from './character.type';

export type CharacterListType = {
  meta: {
    total: number;
    pageSize: number;
    lastPage: number;
    currentPage: number;
    prevPage: number | null;
    nextPage: number | null;
  };
  data: CharacterType[];
};
