import {
  Box,
  Button, Divider,
  HStack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

function IOEditor(prop) {
  return (
    <>
      <Tabs isFitted position='relative' variant='enclosed'>
        <TabList>
          <Tab h={8}><Text fontSize='sm' mt='-2px'>Standard Input</Text></Tab>
          <Tab h={8}><Text fontSize='sm' mt='-2px'>Standard Output</Text></Tab>
          <Tab h={8}><Text fontSize='sm' mt='-2px'>Return Value</Text></Tab>
        </TabList>
        <TabIndicator mt='-1.5px' height='1px' bg='blue.500' borderRadius='1px' />
        <TabPanels>
          <TabPanel>{prop.editors[0]}</TabPanel>
          <TabPanel>{prop.editors[1]}</TabPanel>
          <TabPanel>{prop.editors[2]}</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default IOEditor;