import { Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';

import { Header } from '../../components/Header';
import React, { useEffect, useState } from 'react';
import { Menu } from '../../components/Menu';

import { MagnifyingGlass, MapPin } from 'phosphor-react';
import { BoxEvents } from '../../components/BoxEvents';

import FestasShows from '../../assets/festas-shows.png';
import CursosEWorkshops from '../../assets/cursos-workshops.jpeg';
import { AllRights } from '../../components/AllRights';

import apiJSON from '../../../services/server.json';
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
    async function Testando() {
      await api.get('/tickets').then(response => {
        setD(response.data)
      });
    }

    Testando();
  }, [])

  // let rr = [];

  // d?.map(item => {
  //   const items = {
  //     id: item.id,
  //     img_url: item.img_url,
  //     title: item.title,
  //   }
  //   rr.push(item);
  //   console.log(items)
  // })


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


          {/* {d.map(d => {
            <BoxEvents
              key={d?.id}
              img={d.img_url}
              category={d.title}
              title={d.title}
              dateDayAndMonth={d.date}
              description={d.description}
              slug={d.title as any}
            />
          })} */}

          <AllRights />
        </Flex>

      </Flex>
    </>
  );
}
