import { useState } from "react";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/input";
import { Icon } from "@chakra-ui/icon";
import { AiFillEye } from 'react-icons/ai';
import { RiEyeCloseFill } from 'react-icons/ri';

interface Props {
  placeholder: string;
  isPassword: boolean;
}

export const CustomInput = ({ placeholder, isPassword }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const getInputType = (): string => (!isPassword || show ? "text" : "password");
  const handleClick = (): void => {
    setShow(!show);
  };

  return (
    <InputGroup size="lg" color="whiteAlpha.400">
      <Input
        placeholder={placeholder}
        variant="filled"
        focusBorderColor="transparent"
        fontSize="sm"
        type={getInputType()}
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
  );
}
