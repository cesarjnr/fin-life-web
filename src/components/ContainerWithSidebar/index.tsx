import { Flex, Box, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icon';
import { AiFillFolder } from 'react-icons/ai';
import { MdAccountBalanceWallet } from 'react-icons/md';

export const ContainerWithSidebar = () => {
    return (
        <Flex
            w="100%"
            h="100%"
            bg="inherit"
        >
            <Flex
                w={98}
                h="100%"
                bg="black.800"
                direction="column"
            >
                <Flex flex="1" align="center">
                    <Text flex="1"
                        fontSize="5xl"
                        fontWeight="semibold"
                        color="green.500"
                        align="center"
                    >
                        F
                    </Text>
                </Flex>
                <Box flex="4">
                    <Box
                        h={58}
                        pos="relative"
                        _hover={{ cursor: 'pointer', backgroundColor: '#00D25B0D' }}
                        role="group"
                    >
                        <Box
                            w="6px"
                            h="100%"
                            bg="green.500"
                            pos="absolute"
                            display="none"
                            _groupHover={{ display: 'block' }}
                        />
                        <Flex
                            h="100%"
                            justify="center"
                            align="center"
                        >
                            <Icon
                                as={AiFillFolder}
                                color="white"
                                boxSize="24px"
                                _groupHover={{ color: 'green.500' }}
                            />
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
};
