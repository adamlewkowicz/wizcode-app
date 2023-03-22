import { Box, Text } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { InputSearch } from './InputSearch';
import { useAlbums } from '../hooks/useAlbums';
import { AlbumsList } from './AlbumsList';

interface AlbumsViewProps {}

export const AlbumsView = (props: AlbumsViewProps) => {
  const { isLoading, albumUpdate, errorMessage } = useAlbums();

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
      <InputSearch />
      {isLoading ? (
        <Spinner margin="auto" size="md" />
      ) : (
        <AlbumsList onAlbumUpdate={albumUpdate} />
      )}
    </Box>
  );
};
