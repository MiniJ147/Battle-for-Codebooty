import { Box } from "@chakra-ui/react";
// import {useEffect} from "react";

// const problemEndpoint = "/api/problem/:lobbyId"

function ProblemPanel(prop) {
  return (
    <Box ml={2} mb={4} p={2} border='1px solid' borderRadius={4} borderColor="#333">
      <h1>Problem Panel</h1>
      Hello World!
      {prop.problem}
    </Box>
  )
}

export default ProblemPanel;