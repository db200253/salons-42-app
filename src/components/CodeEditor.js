import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditor = ({ onCodeChange }) => {
  const [code, setCode] = useState('');

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
      />
    </div>
  );
};

export default CodeEditor;
