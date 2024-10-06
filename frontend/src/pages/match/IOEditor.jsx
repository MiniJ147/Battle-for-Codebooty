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
  VStack
} from "@chakra-ui/react";
import StdinEditor from "./StdinEditor.jsx";
import StdoutEditor from "./StdoutEditor.jsx";
import ReturnEditor from "./ReturnEditor.jsx";

function IOEditor() {
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
          <TabPanel><StdinEditor /></TabPanel>
          <TabPanel><StdoutEditor /></TabPanel>
          <TabPanel><ReturnEditor /></TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default IOEditor;