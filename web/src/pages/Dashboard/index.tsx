import { Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { useEffect, useState } from 'react';
import { Menu } from '../../components/Menu';

import { MagnifyingGlass, MapPin } from 'phosphor-react';
import { BoxEvents } from '../../components/BoxEvents';

import { AllRights } from '../../components/AllRights';

import { api } from '../../../services/api';

interface DataProps {
  id: string;
  img_url: string;
  title: string;
  description: string;
  price: string;
  date: string;
}

export function Dashboard() {
  const [d, setD]: any = useState<DataProps | undefined>(undefined);

  useEffect(() => {
    async function loadProducts() {
      await api.get('/tickets').then(response => {
        setD(response.data)
      });
    }

    loadProducts();
  }, [])


  return (
    <>
      <Flex w={1280} m="auto" mt="10" mb="10">
        <Menu />

        <Flex w="100%" direction="column">
          <Header />

          <InputGroup>
            <InputLeftElement
              mt="2"
              children={<MagnifyingGlass size="25px" color="#9798A5" />}
            />
            <Input w={450} focusBorderColor="none" type="text" h="56px" placeholder="Busque por eventos, shows..." />

            <Flex direction="row" ml="5" justifyContent="center" alignItems="center" alignContent="center" >
              <MapPin color="#9798A5" size="25" />
              <Text color="brand.200" ml="2">
                Rio de Janeiro
              </Text>
            </Flex>
          </InputGroup>

          {d?.data?.map((value: any, index: any) => {
            return (
              <BoxEvents
                key={`${value.id}`}
                id={`${value.id}`}
                img={value.img_url}
                category={value.category.name}
                title={value.title}
                dateDayAndMonth={value.date}
                description={value.description}
                slug={value.title as any}
              />
            )
          })}

          <AllRights />
        </Flex>

      </Flex>
    </>
  );
}
