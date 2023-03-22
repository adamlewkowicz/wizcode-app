import { Box, Text } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { InputSearch } from './InputSearch';
import { AlbumRow } from './AlbumRow';
import { useSearchQuery } from '../hooks/useSearchQuery';
import { useAlbums } from '../hooks/useAlbums';
import { filteredAlbumsState } from '../hooks/useFilteredAlbums';
import { useRecoilValue } from 'recoil';

interface AlbumsViewProps {}

export const AlbumsView = (props: AlbumsViewProps) => {
  const { isLoading, albumUpdate, errorMessage } = useAlbums();
  const { query, setQuery, deferredQuery, isSearching } = useSearchQuery();

  const filteredAlbums = useRecoilValue(filteredAlbumsState);

  if (errorMessage != null) {
    return (
      <Text align="center" color="red.400">
        An error occured: {errorMessage}
      </Text>
    );
  }

  return (
    <Box margin="48px auto" padding="8px" maxWidth="800px">
      <Text fontSize="3xl">Top 100 albums</Text>
      <InputSearch
        value={query}
        onTextChange={setQuery}
        isSearching={isSearching}
      />
      {isLoading ? (
        <Spinner margin="auto" size="md" />
      ) : (
        filteredAlbums.map((album) => (
          <AlbumRow
            query={deferredQuery}
            key={album.id}
            onAlbumUpdate={albumUpdate}
            album={album}
          />
        ))
      )}
    </Box>
  );
};
