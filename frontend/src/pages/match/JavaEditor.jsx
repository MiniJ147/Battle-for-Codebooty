import { Editor } from "@monaco-editor/react";
import { Box } from "@chakra-ui/react";
import { useRef, useState } from "react";

function JavaEditor(prop) {
  const snippet = prop.snippet;
  const editorRef = useRef()
  const [value, setValue] = useState(snippet)

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  const options = {
    padding : {
      top : 6,
      bottom : 6,
    },
    scrollBeyondLastLine : false,
  }

  return (
    <Box>
      <Editor
        height="42vh"
        theme="vs-dark"
        onMount={onMount}
        defaultLanguage="java"
        defaultValue={value}
        options={options}
        onChange={(value) => setValue(value)}
      />
    </Box>
  )
}

export default JavaEditor;