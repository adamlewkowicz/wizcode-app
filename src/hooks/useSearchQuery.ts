import { useState, useDeferredValue } from 'react';
import { atom, useRecoilState } from 'recoil';

export const queryState = atom({
  key: 'queryState',
  default: '',
});

export const useSearchQuery = () => {
  const [query, setQuery] = useRecoilState(queryState);
  const deferredQuery = useDeferredValue(query);
  const isSearching = query !== deferredQuery;

  return { query, setQuery, deferredQuery, isSearching };
};
