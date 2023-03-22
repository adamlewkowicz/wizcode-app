import { memo } from 'react';
import styled from '@emotion/styled';
import { Highlight } from '@chakra-ui/react';
import { AlbumNormalized } from '../hooks/useAlbums';

interface AlbumRowProps {
  album: AlbumNormalized;
  onAlbumUpdate: (albumId: string, data: Partial<AlbumNormalized>) => void;
  query: string;
}

export const AlbumRow = memo(
  ({ query, onAlbumUpdate, album }: AlbumRowProps) => {
    return (
      <ListItem isFavorite={album.isFavorite}>
        <img
          src={album.imgUrl}
          alt={album.title}
          loading="lazy"
          height="55"
          width="55"
        />
        <div>
          {query.length > 0 ? (
            <Highlight query={query} styles={{ bg: 'orange.100' }}>
              {album.title}
            </Highlight>
          ) : (
            album.title
          )}
        </div>
        {/* <div>{album.releaseDate}</div> */}
        <Checkbox
          type="checkbox"
          checked={album.isFavorite}
          onChange={(event) => {
            onAlbumUpdate(album.id, { isFavorite: event.target.checked });
          }}
        />
      </ListItem>
    );
  }
);

const ListItem = styled.li<{ isFavorite: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 16px;
  border-bottom: 1px solid #edf2f7;
  gap: 36px;
  background-color: ${(props) => (props.isFavorite ? '#ebf8ff' : '#fff')};
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin-left: auto;
  accent-color: #3182ce;
`;
