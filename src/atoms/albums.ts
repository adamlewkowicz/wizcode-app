import { atom, selector } from 'recoil';
import { AlbumNormalized } from '../hooks/useAlbums';
import { queryState } from './query';

export const albumsState = atom<AlbumNormalized[]>({
  key: 'albumsState',
  default: [],
});

export const filteredAlbumsState = selector({
  key: 'filteredAlbumsState',
  get: ({ get }) => {
    const albums = get(albumsState);
    const query = get(queryState);
    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery.length === 0) {
      return albums;
    }

    const filteredAlbums = albums.filter((album) => {
      const normalizedTitle = album.title.toLowerCase();
      return normalizedTitle.includes(normalizedQuery);
    });

    return filteredAlbums;
  },
});
