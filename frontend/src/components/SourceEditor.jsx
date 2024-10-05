import {Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";

function SourceEditor(prop) {

  return (
    <Box border='1px solid' borderRadius={4} borderColor={"#333"}>
      <Tabs isFitted position='relative' variant='enclosed' onChange={(idx) => prop.onEditorSwitch(idx)}>
        <TabList>
          <Tab h={8}><Text fs='sm' mt='-1.5px'>{prop.languages[0][0]}<Text px={2} as='span' color="gray.600" fontSize="sm">{prop.languages[0][1]}</Text></Text></Tab>
          <Tab h={8}><Text fs='sm' mt='-1.5px'>{prop.languages[1][0]}<Text px={2} as='span' color="gray.600" fontSize="sm">{prop.languages[1][1]}</Text></Text></Tab>
          <Tab h={8}><Text fs='sm' mt='-1.5px'>{prop.languages[2][0]}<Text px={2} as='span' color="gray.600" fontSize="sm">{prop.languages[2][1]}</Text></Text></Tab>
        </TabList>
        <TabIndicator mt='-1.5px' height='1px' bg='blue.500' borderRadius='1px' />
        <TabPanels>
          <TabPanel>{prop.editors[0]}</TabPanel>
          <TabPanel>{prop.editors[1]}</TabPanel>
          <TabPanel>{prop.editors[2]}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default SourceEditor;