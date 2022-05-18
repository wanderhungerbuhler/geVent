import React, { useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Flex, FormControl, Image, Select, Stack, Text } from '@chakra-ui/react';

import { Header } from '../../../components/Header';
import { Menu } from '../../../components/Menu';

import FestasShows from '../../../assets/festas-shows.png'
import { AllRights } from '../../../components/AllRights';

import { Input } from '../../../components/Form/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useParams, useMatch } from 'react-router-dom';

interface FormDataProps {
  ticket: string;
  full_name: string;
  email: string;
  cpf: string;
}

import api from '../../../../services/server.json';

const schema = Yup.object().shape({
  full_name: Yup.string().required('Digite o seu nome'),
  cpf: Yup.string().required('Digite o seu cpf'),
})

export function Cart() {
  const { register, handleSubmit, formState, reset, resetField } = useForm({
    resolver: yupResolver(schema)
  });

  const data = useParams();

  const events = api.data.filter(d => d?.id === data?.id);


  const { errors } = formState;

  const [ticket, setTicket] = useState('');

  const handleSubmitRegister: SubmitHandler<FormDataProps | FieldValues> = async (form, event) => {
    event?.preventDefault();

    if (ticket === "") {
      alert("Selecione a Quantidade de Ingressos");
      return;
    }

    const data = {
      ticket: ticket,
      full_name: form?.full_name,
      email: form?.email,
      cpf: form?.cpf
    }

    console.log(data);

  }

  return (
    <>
      <Flex w={1280} m="auto" mt="10" mb="10">
        <Menu />

        <Flex w="100%" direction="column">
          <Header />

          <Stack spacing={-4} mt="40px" mb="30px">
            <Text>Chegou o grande momento...</Text>
            <Text fontSize="45px" fontWeight="bold" display="inline-block"
              bgGradient="linear(to-l, #6C5DD3, #3E8CFF)"
              bgClip="text">Finalize sua compra :)</Text>
          </Stack>

          {events.map(event => (
            <>
              <Image src={`${event.img}`} borderRadius="7" />

              <Text fontSize="30px" fontWeight="semibold" mt="30px">Descrição do Evento</Text>
              <Text color="brand.100">
                {event.description}
              </Text>
            </>
          ))}

          <Text fontSize="30px" fontWeight="semibold" mt="30px">Informações sobre o Pagamento</Text>
          <Text color="brand.100">
            Após o preenchimento das informações abaixo, enviaremos através do seu e-mail informações sobre a forma de pagamento.
          </Text>

          <FormControl as="form" w={860} mt="30px" onSubmit={handleSubmit(handleSubmitRegister)}>
            <Select
              focusBorderColor="none"
              w={190}
              h="56px"
              mb="10px"
              color="brand.100"
              cursor="pointer"
              name="Qtd. de Ingressos"
              onChange={(e) => setTicket(String(e.target.value))}
              defaultValue="Qtd. de Ingressos"
            >
              <option selected disabled>Qtd. de Ingressos</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
            <Stack direction="row" mb="10px">
              <Input
                h="56px"
                placeholder="Nome Completo"
                focusBorderColor="none"
                error={errors?.full_name}
                {...register('full_name')}
              />
              <Input
                h="56px"
                value="whfdev@gmail.com"
                bg="brand.100"
                focusBorderColor="none"
                error={errors?.email}
                {...register('email')}
              />
            </Stack>
            <Stack direction="row">
              <Input
                placeholder="CPF"
                error={errors?.cpf}
                {...register('cpf')}
              />
              <Button
                h="56px"
                type="submit"
                w={420}
                bgGradient="linear(to-l, #6C5DD3, #3E8CFF)"
                color="brand.50"
                _hover={{
                  bgGradient: "linear(to-l, #6C5DD3, #3E8CFF)"
                }}
              >Finalizar Pedido</Button>
            </Stack>
          </FormControl>

          <AllRights />
        </Flex>
      </Flex>
    </>
  );
}
