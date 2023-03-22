import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AlbumsView } from './components/AlbumsView';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <AlbumsView />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
