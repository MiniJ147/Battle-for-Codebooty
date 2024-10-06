import {Box, Text} from "@chakra-ui/react";
// import {useEffect} from "react";

// const problemEndpoint = "/api/problem/:lobbyId"

function ProblemPanel(prop) {
  return (
    <Box ml={2} mb={4} p={2} border='1px solid' borderRadius={4} borderColor="#333">
      <Text fontSize='2xl' fontFamily='fantasy'><b>Problem Panel</b></Text>
      Hello World!
      {prop.problem}
    </Box>
  )
}

export default ProblemPanel;