'use client';

//chakra
import { ChakraProvider } from '@chakra-ui/react';

//redux
import { Provider } from 'react-redux';
import store from '@/redux/store';

const AppProvider = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ChakraProvider>
      <Provider store={store}>{children}</Provider>
    </ChakraProvider>
  );
};

export default AppProvider;
