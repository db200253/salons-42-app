import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CodeEditor from './components/CodeEditor';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [previewCode, setPreviewCode] = useState(null);

  const handleCodeChange = (code) => {
    setPreviewCode(code);
  };

  return (
    <div className="app">
	<div>
	    <Navbar />
	</div>
	<div className="ce">
	    <CodeEditor onCodeChange={handleCodeChange} />
	    <div className="preview">
		{/* Afficher ici la zone de rendu en direct */}
		<h2>Rendu en Direct :</h2>
		{previewCode !== null ? (
		    <div dangerouslySetInnerHTML={{ __html: previewCode }} />
		) : (
		    <p>Aucun code à afficher pour le moment.</p>
		)}
	    </div>
	</div>
	<div>
	    <Footer />
	</div>
    </div>
  );
};

export default App;
