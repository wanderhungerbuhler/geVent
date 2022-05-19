import { Flex, Text, Image, Stack, Box } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

interface NavigateUrl {
  slug: "subajovem-bh" | "universo-totvs-2022";
}

interface Props extends NavigateUrl {
  category: string;
  title: string;
  dateDayAndMonth: string;
  description: string;
  img: string;
}

export function BoxEvents({ img, category, title, dateDayAndMonth, description }: Props) {

  return (
    <>
      <Flex mt="36px" direction="column">
        <Text fontSize="25px" fontWeight="semibold" letterSpacing={-1} color="brand.200" mb="15px">{category}</Text>
        <Flex
          w="330px"
          h="310"
          borderRadius="7px"
          bg="brand.50"
          shadow="base"
          overflow="hidden"
          cursor="pointer"
          onClick={() => { }}
        >
          <Stack>
            <Image src={img} />
            <Box p="5">
              <Text fontSize="15px" color="brand.200" lineHeight="1">{dateDayAndMonth}</Text>
              <Text fontSize="20px" color="brand.200" fontWeight="semibold">{title}</Text>
              <Text fontSize="12px" color="brand.200" mt="2" lineHeight="1">{description}</Text>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </>
  )
}
