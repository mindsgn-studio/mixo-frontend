import { Box, Button, Container, Text } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Web3Auth } from '@web3auth/modal';
import { useEffect, useLayoutEffect, useState } from 'react';

export const Navigation = () => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);

  const login = async () => {
    if (!web3auth) {
      throw new Error('web3auth not initialized yet');
    }
    const web3authProvider = await web3auth.connect();
    if (!web3authProvider) {
      throw new Error('web3authprovider not initialized yet');
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId: `${process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT}`,
          chainConfig: {
            chainNamespace: 'eip155',
            chainId: '1',
            rpcTarget: 'https://rpc.ankr.com/eth'
          }
        });

        await web3auth.initModal();

        setWeb3auth(web3auth);
      } catch (error: any) {
        console.error(error);
      } finally {
      }
    };
    init();
  }, []);

  return (
    <Box
      zIndex={2}
      padding={5}
      display="flex"
      justifyContent={'space-between'}
      flexDir="row"
      width="100%"
      background={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0,0, 0, 0.0))`}
    >
      <Box />
      {web3auth ? (
        <Button
          background={'black'}
          onClick={() => {
            login();
          }}
        >
          <Text color="white">Sign In</Text>
        </Button>
      ) : (
        <Button
          background={'black'}
          onClick={() => {
            login();
          }}
        >
          <Text color="white">Sign Out</Text>
        </Button>
      )}
    </Box>
  );
};
