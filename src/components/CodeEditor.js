import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const CodeEditor = ({ onCodeChange }) => {
  const [code, setCode] = useState('');

  useEffect(() => {
      const initialCode = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      /* Votre CSS personnalisé ici */
    </style>
  </head>
  <body>
    <!-- Change me -->
  </body>
</html>
`;    
    setCode(initialCode);
    onCodeChange(initialCode);
  }, [onCodeChange]);

  const handleChange = (value) => {
    setCode(value);
    onCodeChange(value);
  };

  return (
    <div className="code-editor">
      <AceEditor
        mode="html"
        theme="monokai"
        onChange={handleChange}
        value={code}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
      />
    </div>
  );
};

export default CodeEditor;
