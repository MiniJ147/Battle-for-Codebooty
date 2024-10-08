import { Editor } from "@monaco-editor/react";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";

function PythonEditor(prop) {
  const editorRef = useRef()

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();

    // TODO:
    // can use editor.setValue("") to change the value of an editor
    // so just store an array of editor references in page.jsx later
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
        defaultLanguage="python"
        defaultValue={prop.snippet}
        options={options}
        onChange={prop.onChange}
      />
    </Box>
  )
}

export default PythonEditor;