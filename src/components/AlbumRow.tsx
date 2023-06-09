import { memo } from 'react';
import styled from '@emotion/styled';
import { Highlight, IconButton } from '@chakra-ui/react';
import { AlbumNormalized } from '../hooks/useAlbums';
import { StarIcon } from '@chakra-ui/icons';

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
        <Title>
          {query.length > 0 ? (
            <Highlight query={query} styles={{ bg: 'orange.100' }}>
              {album.title}
            </Highlight>
          ) : (
            album.title
          )}
        </Title>
        <IconButton
          aria-label="Mark album as favorite"
          colorScheme={album.isFavorite ? 'yellow' : undefined}
          onClick={() => {
            onAlbumUpdate(album.id, { isFavorite: !album.isFavorite });
          }}
          icon={<StarIcon />}
        />
      </ListItem>
    );
  }
);

const ListItem = styled.li<{ isFavorite: boolean }>`
  display: flex;
  align-items: center;
  padding: 24px 16px;
  border-bottom: 1px solid #edf2f7;
  gap: 36px;
  background-color: ${(props) => (props.isFavorite ? '#fdfdf5' : '#fff')};
  @media (max-width: 420px) {
    gap: 12px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const Title = styled.p`
  flex: 1;
  white-space: pre-wrap;
  text-overflow: ellipsis;
`;
