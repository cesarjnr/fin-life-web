import { useState, memo } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/input";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { Icon } from "@chakra-ui/icon";
import { AiFillEye } from "react-icons/ai";
import { RiEyeCloseFill } from "react-icons/ri";

interface Props {
  name: string;
  placeholder: string;
  isPassword: boolean;
  register: UseFormRegister<FieldValues>;
  errorMessage?: string;
}

export const CustomInput = memo(({
  name,
  placeholder,
  isPassword,
  register,
  errorMessage
}: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const getInputType = (): string =>
    !isPassword || show ? "text" : "password";
  const handleClick = (): void => {
    setShow(!show);
  };

  return (
    <FormControl isInvalid={Boolean(errorMessage)}>
      <InputGroup size="lg" color="whiteAlpha.400">
        <Input
          placeholder={placeholder}
          variant="filled"
          focusBorderColor={errorMessage ? "red.700" : "transparent"}
          errorBorderColor="red.700"
          fontSize="sm"
          type={getInputType()}
          {...register(name)}
        />
        {isPassword && (
          <InputRightElement>
            <Icon
              as={show ? RiEyeCloseFill : AiFillEye}
              cursor="pointer"
              onClick={handleClick}
            />
          </InputRightElement>
        )}
      </InputGroup>
      {errorMessage && (
        <FormErrorMessage color="red.700">{errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
});
