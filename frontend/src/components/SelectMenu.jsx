import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function SelectMenu(prop) {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">Language:</Text>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>{prop.current}</MenuButton>
        <MenuList bg="#110c1b">
          {prop.options.map(([primary, secondary]) => {
            return (
              <MenuItem key={primary} onClick={() => prop.onSelect(primary)}
                color={primary === prop.current ? "blue.400" : ""}
                bg={primary === prop.current ? "gray.900" : "transparent"}
                _hover={{color:"blue.400",bg:"gray.900",}}>
                {primary} &nbsp;
                <Text as="span" color="gray.600" fontSize="sm">{secondary}</Text>
              </MenuItem>
            )
          })}
        </MenuList>
      </Menu>
    </Box>
  )
}

export default SelectMenu;