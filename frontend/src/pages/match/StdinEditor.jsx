import { Editor } from "@monaco-editor/react";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";

function StdinEditor(prop) {
  const editorRef = useRef()

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
        height='23.5vh'
        theme="vs-dark"
        onMount={onMount}
        value={prop.snippet}
        options={options}
        onChange={prop.onChange}
      />
    </Box>
  )
}

export default StdinEditor;