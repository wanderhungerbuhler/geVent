import React from 'react';
import { Avatar, Flex, Stack, Text } from '@chakra-ui/react';

import Profile from '../../assets/profile.jpeg';
import { Menu } from '../Menu';
import { useAuth } from '../../hooks/authContext';

export function Header() {
  const { user } = useAuth();

  return (
    <Flex h="90px" mt="10" align="center" justifyContent="space-between" pr="10">
      <Flex justifyContent="center" alignItems="center" direction="row">
        <Avatar name={`${user?.displayName}`} src={`${user?.photoURL}`} mr="5" />
        <Stack spacing={.1}>
          <Text fontSize="15px" lineHeight="1px">Olá, seja bem-vindo</Text>
          <Text fontSize="25px" fontWeight="bold">{`${user?.displayName}`}</Text>
        </Stack>
      </Flex>
    </Flex>
  )
}
