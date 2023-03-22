import { Input, InputGroup } from '@chakra-ui/react';
import { memo } from 'react';
import { useRecoilState } from 'recoil';
import { queryState } from '../atoms/query';

interface InputSearchProps {}

export const InputSearch = memo(({}: InputSearchProps) => {
  const [query, setQuery] = useRecoilState(queryState);

  return (
    <InputGroup
      position="sticky"
      top="8px"
      margin="24px 0"
      backgroundColor="#fff"
      zIndex={100}
    >
      <Input
        placeholder="Search album by title or artist"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        backgroundColor="whiteAlpha.100"
      />
    </InputGroup>
  );
});
