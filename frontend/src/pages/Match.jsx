import { Editor } from "@monaco-editor/react";

export const Match = () => {
  return (
    <>
      <h1>Match</h1>
      <Editor height="90vh" defaultLanguage="python" defaultValue="print('bruh')"/>
    </>
  )
}