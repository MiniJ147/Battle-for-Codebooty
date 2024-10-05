import { Editor } from "@monaco-editor/react";
import { Box } from "@chakra-ui/react";
import { useRef, useState } from "react";

function StdinEditor() {
  const editorRef = useRef()
  const [value, setValue] = useState('')

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  const options = {
    padding : {
      top : 6,
      bottom : 6,
    },
    minimap : {
      enabled : false,
    },
    scrollBeyondLastLine : false,
  }

  return (
    <Box>
      <Editor
        height='26.5vh'
        theme="vs-dark"
        onMount={onMount}
        value={value}
        options={options}
        onChange={(value) => setValue(value)}
      />
    </Box>
  )
}

export default StdinEditor;