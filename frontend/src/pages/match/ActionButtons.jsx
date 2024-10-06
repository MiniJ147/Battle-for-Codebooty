import {
  Box,
  Button, Divider,
  VStack
} from "@chakra-ui/react";

function ActionButtons() {
  return (
    <Box px={4} py={4}>
      <VStack spacing={1} w="full" h="full">
        <Button variant="outline" w='full' fontSize={12} py={2}>Cannon Blast</Button>
        <Button variant="outline" w='full' fontSize={12} py={2}>Spyglass</Button>
        <Button variant="outline" w='full' fontSize={12} py={2}>Raid Ship</Button>
        <Divider bgColor={"#fff"} mb={2} mt={2} borderWidth={1.5} borderRadius={8} />
        <Button variant="outline" colorScheme="green" w='full' fontSize={12} py={2}>Run</Button>
        <Button variant="solid" colorScheme="green" w='full' fontSize={12} py={2}>Submit</Button>
      </VStack>
    </Box>
  )
}

export default ActionButtons;