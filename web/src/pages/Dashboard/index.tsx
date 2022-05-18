import { Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';

import { MagnifyingGlass, MapPin } from 'phosphor-react';
import { BoxEvents } from '../../components/BoxEvents';

import FestasShows from '../../assets/festas-shows.png';
import CursosEWorkshops from '../../assets/cursos-workshops.jpeg';
import { AllRights } from '../../components/AllRights';

import api from '../../../services/server.json';

export function Dashboard() {
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


          {api.data.map(d => (
            <BoxEvents
              key={d.id}
              img={d.img}
              category={d.category}
              title={d.title}
              dateDayAndMonth={d.dateDayAndMonth}
              description={d.description}
              slug={d.slug as any}
              id={d.id}
            />
          ))}

          <AllRights />
        </Flex>

      </Flex>
    </>
  );
}
