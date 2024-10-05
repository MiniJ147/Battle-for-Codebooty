import { Editor } from "@monaco-editor/react";
import { Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import {LANGUAGE_THEMES} from "../constants.js";

const themes = LANGUAGE_THEMES;

function SourceEditor(prop) {
  const editorRef = useRef()
  const [value, setValue] = useState('')

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  return (
    <Box>
      <Editor
        height="100vh"
        theme="vs-dark"
        language={themes[prop.language]}
        onMount={onMount}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </Box>
  )
}

export default SourceEditor;