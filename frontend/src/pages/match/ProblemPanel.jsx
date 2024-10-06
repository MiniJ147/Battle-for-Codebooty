import {Box, Divider, Text} from "@chakra-ui/react";
// import {useEffect} from "react";

// const problemEndpoint = "/api/problem/:lobbyId"

function ProblemPanel(prop) {
  return (
    <div style={{ height: '706px', overflow: 'scroll' }}>
      <Box ml={2} mb={4} p={2}>
        <Text fontSize='2xl' fontFamily='fantasy'><b>{prop.title}</b></Text>
        <Divider bgColor={"#fff"} mb={2} mt={2} borderWidth={1.5} borderRadius={8} />
        <td dangerouslySetInnerHTML={{__html: prop.content}} />
      </Box>
    </div>
  )
}

export default ProblemPanel;