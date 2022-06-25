import { IconType } from 'react-icons/lib';
import { Flex, Box, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icon';

export interface MenuItemProps {
  icon: IconType;
  label: string;
  subItems: { label: string; }[];
  isSidebarExpanded: boolean;
  isItemSelected: boolean;
  onItemClick: (label: string) => void;
}

export const MenuItem = ({
  icon,
  label,
  subItems,
  isSidebarExpanded,
  isItemSelected,
  onItemClick
}: MenuItemProps) => {
  return (
    <Box
      role="group"
      pos="relative"
      key={label}
    >
      <Box
        w="6px"
        h="100%"
        bg="green.50"
        pos="absolute"
        top="0"
        left="0"
        display={isItemSelected ? 'block' : 'none'}
      />
      <Flex
        h="100%"
        justify="center"
        align="center"
        gap="28px"
        py="18px"
        px="38px"
        bg={isItemSelected ? 'green.100' : 'transparent'}
        onClick={() => onItemClick(label)}
        _hover={{ cursor: 'pointer' }}
      >
        <Icon
          color={isItemSelected ? 'white' : 'whiteAlpha.800'}
          boxSize="24px"
          as={icon}
          _groupHover={!isItemSelected ? { color: 'white' } : undefined}
        />
        <Text
          flex="1"
          color={isItemSelected ? 'white' : 'whiteAlpha.800'}
          display={isSidebarExpanded ? 'inline' : 'none'}
          _groupHover={!isItemSelected ? { color: 'white' } : undefined}
        >
          { label }
        </Text>
      </Flex>
      {isItemSelected && (
        <Flex
          bg="green.200"
          flexDir="column"
          role="group"
        >
          {subItems.map((subItem) => (
            <Flex
              gap="28px"
              py="18px"
              px="38px"
              key={subItem.label}
            >
              <Box w="24px" h="24px" />
              <Text
                flex="1"
                color="white"
                _hover={{ cursor: 'pointer', color: 'green.50' }}
              >
                { subItem.label }
              </Text>
            </Flex>
          ))}
        </Flex>
      )}
    </Box>
  );
}