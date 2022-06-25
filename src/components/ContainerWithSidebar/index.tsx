import { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { AiFillFolder } from 'react-icons/ai';
// import { MdAccountBalanceWallet } from 'react-icons/md';

import { MenuItem, MenuItemProps } from './MenuItem';

type Item = Omit<MenuItemProps, 'isSidebarExpanded' | 'onItemClick'>;

export const ContainerWithSidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [menuItems, setMenuItems] = useState<Item[]>([
    {
      icon: AiFillFolder,
      label: 'Gerenciamento',
      isItemSelected: false,
      subItems: [{ label: 'Categorias de Despesas' }]
    },
    // {
    //   icon: MdAccountBalanceWallet,
    //   label: 'Portfólio',
    //   isItemSelected: false,
    //   subItems: []
    // }
  ]);
  const handleItemClick = (itemLabel: string) => {
    const previousSelectedItem = menuItems.find((item) => item.isItemSelected);
    const selectedItem = menuItems.find((item) => item.label === itemLabel);

    if (previousSelectedItem) {
      previousSelectedItem!.isItemSelected = false;

      if (previousSelectedItem === selectedItem) {
        setIsSidebarExpanded(!isSidebarExpanded);
      } else {
        selectedItem!.isItemSelected = true;
      }
    } else {
      selectedItem!.isItemSelected = true;

      setIsSidebarExpanded(!isSidebarExpanded);
    }

    setMenuItems([...menuItems]);
  };

  return (
    <Flex
      w="100%"
      h="100%"
      bg="inherit"
    >
      <Flex
        minW={98}
        h="100%"
        bg="black.800"
        direction="column"
      >
        <Flex flex="1" align="center">
          <Text
            flex="1"
            fontSize="5xl"
            fontWeight="semibold"
            color="green.50"
            align="center"
          >
            F
          </Text>
        </Flex>


        <Box flex="4">
          {menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.label}
              icon={menuItem.icon}
              label={menuItem.label}
              subItems={menuItem.subItems}
              isSidebarExpanded={isSidebarExpanded}
              isItemSelected={menuItem.isItemSelected}
              onItemClick={handleItemClick}
            />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};
