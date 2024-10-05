import SourceEditor from "../../components/SourceEditor.jsx";
import {Box} from "@chakra-ui/react";
import SelectMenu from "../../components/SelectMenu.jsx";
import { LANGUAGE_VERSIONS } from "../../constants.js";
import {useState} from "react";

const languages = Object.entries(LANGUAGE_VERSIONS)
console.log("match",languages);

export const Match = () => {
  const [language, setLanguage] = useState("python3")

  const onSelect = (language) => {
    setLanguage(language)
  }

  return (
    <>
      <h1>Match</h1>
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={6}>
        <SelectMenu language={language} options={languages} onSelect={onSelect} />
        <SourceEditor language={language} />
      </Box>
    </>
  )
}