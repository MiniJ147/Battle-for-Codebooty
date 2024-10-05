import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function SelectMenu(prop) {
  return (
    <Box>
      <Text mb={2} fontSize="lg">Language:</Text>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>{prop.language}</MenuButton>
        <MenuList>
          {prop.options.map(([primary, secondary]) => {
            return (
              <MenuItem key={primary} onClick={() => prop.onSelect(primary)}>
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