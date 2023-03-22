import { atom, useRecoilState } from 'recoil';
import { useCallback, useEffect, useState } from 'react';
import { getAlbums } from '../network/getAlbums';

export const albumsState = atom<AlbumNormalized[]>({
  key: 'albumsState',
  default: [],
});

export type AlbumNormalized = {
  id: string;
  title: string;
  imgUrl: string;
  isFavorite: boolean;
};

export const useAlbums = () => {
  const [albums, setAlbums] = useRecoilState(albumsState);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAlbums()
      .then((data) => {
        const albumsNormalized =
          data.feed.entry?.map<AlbumNormalized>((entry) => ({
            id: entry.id.label,
            title: entry.title.label,
            imgUrl: entry['im:image'][0].label ?? IMG_PLACEHOLDER,
            isFavorite: false,
          })) ?? [];

        setAlbums(albumsNormalized);
      })
      .catch((error) => setErrorMessage(error.message ?? 'Unknown error'))
      .finally(() => setIsLoading(false));
  }, []);

  const albumUpdate = useCallback(
    (albumId: string, album: Partial<AlbumNormalized>) => {
      setAlbums((prevAlbums) =>
        prevAlbums.map((prevAlbum) => {
          if (prevAlbum.id === albumId) {
            return {
              ...prevAlbum,
              ...album,
            };
          }
          return prevAlbum;
        })
      );
    },
    []
  );

  return { albums, albumUpdate, errorMessage, isLoading };
};

const IMG_PLACEHOLDER =
  'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png';
