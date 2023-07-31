import { Box, Heading, Text } from '@chakra-ui/react';
import { SideNavigationLinks } from '@/constants/sideNavigationLinks';
import { LinkButton } from './linkButton';

export const SideNavigation = () => {
  return (
    <Box
      position={'fixed'}
      padding="1em"
      height="100vh"
      boxShadow={'rgba(0, 0, 0, 0.1) 0px 12px 12px'}
      flex={1}
      background={'white'}
      zIndex={1}
      top={0}
    >
      <Heading display={['none', 'none', 'none', 'flex']} cursor={'pointer'}>
        mixø.xyz
      </Heading>
      <Box display={['none', 'none', 'none', 'flex']} flexDirection="column">
        {SideNavigationLinks.map((link: any) => {
          return (
            <LinkButton key={link.name} name={link.name} link={link.link} />
          );
        })}
      </Box>
    </Box>
  );
};
