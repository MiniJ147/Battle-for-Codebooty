import {
  Box,
  Button, Divider,
  HStack, StackDivider,
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
    <Box>
      <HStack spacing={0}>
        <Box w='80%' h='36vh' border="1px solid" borderRadius={4} borderColor="#333">
          <Tabs isFitted position='relative' variant='enclosed'>
            <TabList>
              <Tab h={8}><Text fontSize='sm' mt='-1.5px'>Standard Input</Text></Tab>
              <Tab h={8}><Text fontSize='sm' mt='-1.5px'>Standard Output</Text></Tab>
              <Tab h={8}><Text fontSize='sm' mt='-1.5px'>Return Value</Text></Tab>
            </TabList>
            <TabIndicator mt='-1.5px' height='1px' bg='blue.500' borderRadius='1px' />
            <TabPanels>
              <TabPanel><StdinEditor /></TabPanel>
              <TabPanel><StdoutEditor /></TabPanel>
              <TabPanel><ReturnEditor /></TabPanel>
            </TabPanels>
          </Tabs>
        </Box>


        <Box w='20%' h='36vh' border="1px solid" borderRadius={4} borderColor="#333" alignItems="center" px={4} py={4}>
          <VStack alignItems="center">
            <Button variant="outline" w='full' fontSize={12} boxSize={"full"} py={2}>Cannon Blast</Button>
            <Button variant="outline" w='full' fontSize={12} boxSize={"full"} py={2}>Spyglass</Button>
            <Button variant="outline" w='full' fontSize={12} boxSize={"full"} py={2}>Raid Ship</Button>
            <Divider bgColor={"#fff"} />
            <Button variant="outline" colorScheme="green" w='full' fontSize={12} boxSize={"full"} py={2}>Run</Button>
            <Button variant="solid" colorScheme="green" w='full' fontSize={12} boxSize={"full"} py={2}>Submit</Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  )
}

export default IOEditor;