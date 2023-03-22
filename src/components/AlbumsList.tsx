import { memo } from 'react';
import styled from '@emotion/styled';
import { AlbumNormalized } from '../hooks/useAlbums';

interface AlbumsListProps {
  isSearching: boolean;
}

export const AlbumsList = ({ isSearching }: AlbumsListProps) => {
  return (
    <List
      style={{
        opacity: isSearching ? '0.5' : '1',
      }}
    >
      {/* {Render albums} */}
    </List>
  );
};

const List = styled.ul`
  transition: opacity 0.2s ease;
`;

export const AlbumsListMemo = memo(AlbumsList);
