import { Center, Box, Text, Flex, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { CustomInput } from '../../components/CustomInput';
import { usePost } from "../../hooks/usePost";

export const SignUp = () => {
  const [
    makePostRequest,
    isLoading,
    requestErromessage
  ] = usePost('/users', {});

  return (
    <Center w="full" h="full">
      <Flex
        direction="column"
        w="500px"
        h="700px"
        bg="customBlack.900"
        borderRadius="xl"
        py="39px"
        px="61px"
      >
        <Box>
          <Center>
            <Text
              as="span"
              color="customGreen.500"
              fontSize="2xl"
              fontWeight="semibold"
              lineHeight="none"
            >
              Fin
            </Text>
            <Text
              as="span"
              color="white"
              fontSize="2xl"
              fontWeight="semibold"
            >
              Life
            </Text>
          </Center>

          <Text
            align="center"
            color="white"
            fontSize="sm"
            fontWeight="semibold"
          >
            Sua vida financeira em um só lugar
          </Text>
        </Box>

        <Spacer />

        <Flex h="280px" direction="column">
          <CustomInput placeholder="Nome" isPassword={false} />
          <Spacer />
          <CustomInput placeholder="Email" isPassword={false} />
          <Spacer />
          <CustomInput placeholder="Senha" isPassword={true} />
          <Spacer />
          <Button size="md" onClick={makePostRequest}>Criar Conta</Button>
        </Flex>

        <Spacer />

        <Box>
          <Text
            align="center"
            color="white"
            fontSize="sm"
            fontWeight="semibold"
          >
            Já tem uma conta?
          </Text>
          <Text
            align="center"
            color="customGreen.500"
            fontSize="sm"
            fontWeight="semibold"
          >
            Entrar
          </Text>
        </Box>
      </Flex>
    </Center>
  )
};
