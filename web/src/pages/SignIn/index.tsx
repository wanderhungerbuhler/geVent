import { useState } from 'react';
import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react';

import GoogleSvg from '../../assets/googleSvg.svg';
import LogoSignIn from '../../assets/logo-signin.svg';

import { ArrowDown } from 'phosphor-react';

import app from '../../../services/firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { useAuth } from '../../hooks/authContext';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { user } = useAuth();

  { user && navigate('/dashboard') }

  async function SignInWithGoogleAccount() {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider).then(() => {
      setPersistence(auth, browserLocalPersistence)
    })

    setLoading(true);
  }

  return (
    <Flex w="100vw" h="100vh" bgGradient="linear(to-r, brand.400, brand.300)" direction="column">
      <Stack w="455px" m="auto" spacing="20">
        <Image w="250px" m="auto" src={LogoSignIn} alt="Logo - geVent" />
        <Text fontWeight="semibold" fontSize="20px" textAlign="center" color="brand.50">
          Organizamos os melhores
          Eventos, shows e muito mais para você
        </Text>

        <Flex direction="column" justifyContent="center" alignItems="center" mt="30">
          <Text fontWeight="thin" fontSize="15px" textAlign="center" color="brand.50">
            Facilite seu acesso
          </Text>
          <ArrowDown color="#3E8CFF" size="25" />
          <Button
            w="260px"
            h="56px"
            mt="10"
            fontWeight="regular"
            justifyContent="space-evenly"
            onClick={SignInWithGoogleAccount}
            isLoading={loading}
          >
            <Image src={GoogleSvg} />
            Entrar com Google
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}
