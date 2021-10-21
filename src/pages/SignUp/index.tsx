import { useState } from "react";
import { Center, Box, Text, Flex, Spacer } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import { AiFillEye } from 'react-icons/ai';
import { RiEyeCloseFill } from 'react-icons/ri';

const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

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
          <Input
            placeholder="Nome"
            variant="filled"
            focusBorderColor="transparent"
            fontSize="sm"
            size="lg"
            color="whiteAlpha.400"
          />
          <Spacer />
          <Input
            placeholder="Email"
            variant="filled"
            focusBorderColor="transparent"
            fontSize="sm"
            size="lg"
            color="whiteAlpha.400"
          />
          <Spacer />
          <InputGroup size="lg" color="whiteAlpha.400">
            <Input
              placeholder="Senha"
              variant="filled"
              focusBorderColor="transparent"
              fontSize="sm"
              type={show ? "text" : "password"}
            />
            <InputRightElement>
              <Icon as={show ? RiEyeCloseFill : AiFillEye} cursor="pointer" onClick={handleClick} />
            </InputRightElement>
          </InputGroup>
          <Spacer />
          <Button size="md">Criar Conta</Button>
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
  );
}

export default SignUp;
