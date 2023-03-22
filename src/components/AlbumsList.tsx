import { memo } from 'react';
import { AlbumNormalized } from '../hooks/useAlbums';
import { useRecoilValue } from 'recoil';
import { filteredAlbumsState } from '../atoms/albums';
import { queryState } from '../atoms/query';
import { AlbumRow } from './AlbumRow';

interface AlbumsListProps {
  onAlbumUpdate: (albumId: string, album: Partial<AlbumNormalized>) => void;
}

export const AlbumsList = memo(({ onAlbumUpdate }: AlbumsListProps) => {
  const query = useRecoilValue(queryState);
  const filteredAlbums = useRecoilValue(filteredAlbumsState);

  return (
    <ul>
      {filteredAlbums.map((album) => (
        <AlbumRow
          query={query}
          key={album.id}
          onAlbumUpdate={onAlbumUpdate}
          album={album}
        />
      ))}
    </ul>
  );
});
