import React, { useState, useEffect, useCallback } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const DEFAULT_HTML_CODE = `<!DOCTYPE html>
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
</html>`;

const CodeEditor = ({ onCodeChange, reset, resetToFalse }) => {
  const [code, setCode] = useState(DEFAULT_HTML_CODE);

  const handleChange = (newCode) => {
    setCode(newCode);
    onCodeChange(newCode);
  };

  const handleResetCode = useCallback(() => {
    setCode(DEFAULT_HTML_CODE);
  }, []);

  useEffect(() => {
    if (reset) {
      handleResetCode();
      resetToFalse();
    }
  }, [reset, handleResetCode, resetToFalse]);

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
