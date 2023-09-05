//NavBar

import React from 'react';
import { Flex, Spacer } from '@chakra-ui/react';
import UserAvatar from '../UserAvatar/UserAvatar';
import theme from '../../styles/theme';

function NavBar() {
  return (
    <Flex p={4} alignItems={'center'} bg={theme.colors.custom.color2}>
      <Spacer />
      <UserAvatar />
    </Flex>
  );
}

export default NavBar; 