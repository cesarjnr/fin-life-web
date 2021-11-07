import { Center, Box, Text, Flex, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useForm } from "react-hook-form";

import { CustomInput } from '../../components/CustomInput';
import { usePost } from "../../hooks/usePost";

interface UserFormData {
  name: string;
  email: string;
  password: string;
}

export const SignUp = () => {
  const { handleSubmit, register } = useForm<UserFormData>();
  const [
    makePostRequest,
    isLoading,
    requestErromessage
  ] = usePost<any>('/users');
  const onSubmit = (data: UserFormData) => {
    makePostRequest<UserFormData>(data);
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

        <Flex
          as="form"
          h="280px"
          direction="column"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            name="name"
            placeholder="Nome"
            isPassword={false}
            register={register}
          />
          <Spacer />
          <CustomInput
            name="email"
            placeholder="Email"
            isPassword={false}
            register={register}
          />
          <Spacer />
          <CustomInput
            name ="password"
            placeholder="Senha"
            isPassword={true}
            register={register}
          />
          <Spacer />
          <Button size="md" type="submit">Criar Conta</Button>
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
