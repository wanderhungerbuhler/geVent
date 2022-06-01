import { Flex, Image, Stack, Text, Link } from '@chakra-ui/react';

import { Heart, LineSegments, ShoppingCart, SignOut, Ticket } from 'phosphor-react';

import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/authContext';

import './styles.css'

export function Menu() {
  const { logOut } = useAuth();

  return (
    <Flex h="100vh" direction="column" p={6}>
      <Image src={Logo} w={179} h={50} />

      <Flex direction="column">
        <Text fontWeight="semibold" color="brand.100" fontSize="20px" mt="10" mb="2">Dashboard</Text>

        <Stack spacing={2}>
          <NavLink to="/dashboard" className={(navData) => (navData.isActive ? 'active' : 'link')}>
            <Link w="239px" h="59" style={{ textDecoration: "none" }} fontWeight="semibold" fontSize="15px" ml="2" display="flex" alignItems="center" pl="4" outline="none">
              <LineSegments size="25" />
              Overview
            </Link>
          </NavLink>

          <NavLink to="/tickets" className={(navData) => (navData.isActive ? 'active' : 'link')}>
            <Link w="239px" h="59" style={{ textDecoration: "none" }} fontWeight="semibold" fontSize="15px" ml="2" display="flex" alignItems="center" pl="4" outline="none">
              <Ticket size="25" />
              Tickets
            </Link>
          </NavLink>

          <NavLink to="/wishlist" className={(navData) => (navData.isActive ? 'active' : 'link')}>
            <Link w="239px" h="59" style={{ textDecoration: "none" }} fontWeight="semibold" fontSize="15px" ml="2" display="flex" alignItems="center" pl="4" outline="none">
              <Heart size="25" />
              Wishlist
            </Link>
          </NavLink>


          <NavLink to="/cart" className={(navData) => (navData.isActive ? 'active' : 'link')}>
            <Link w="239px" h="59" style={{ textDecoration: "none" }} fontWeight="semibold" fontSize="15px" ml="2" display="flex" alignItems="center" pl="4" outline="none">
              <ShoppingCart size="25" />
              Cart
            </Link>
          </NavLink>
        </Stack>

        <Stack as="button" mt="70" onClick={logOut}>
          <Link w="239px" h="59" style={{ textDecoration: "none" }} fontWeight="semibold" fontSize="15px" ml="2" display="flex" color="brand.400" alignItems="center" pl="4" outline="none">
            <SignOut size="25" />
            Logout
          </Link>
        </Stack>
      </Flex>
    </Flex >
  );
}
