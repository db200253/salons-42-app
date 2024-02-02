import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CodeEditor from './components/CodeEditor';
import Footer from './components/Footer';
import ModalComponent from './components/ModalComponent';
import './App.css';
import './custom.css';

const App = () => {
  const [previewCode, setPreviewCode] = useState(null);
  const [tutorialStep, setTutorialStep] = useState(1);
  const [isTutorialActive, setIsTutorialActive] = useState(false);
  const [resetCode, setResetCode] = useState(false);
  const maxSteps = 4;

  const handleNext = () => {
    if (tutorialStep < maxSteps) {
      setTutorialStep(tutorialStep + 1);
    } else {
      setIsTutorialActive(false);
      setTutorialStep(1);
    }
  };

  const handlePrev = () => {
    if (tutorialStep > 1) {
      setTutorialStep(tutorialStep - 1);
    }
  };

  const handleStartTutorial = () => {
    setIsTutorialActive(true);
  };

  const handleCodeChange = (code) => {
    setPreviewCode(code);
  };

  const handleResetTuto = () => {
    setTutorialStep(1);
  }

  const handleResetCode = () => {
    setResetCode(true);
  }
    
  return (
    <div className="app">
      <div className="hero">
        <Navbar
          onStartTutorial={handleStartTutorial}
          onResetTutorial={handleResetTuto}
	  onResetCode={handleResetCode}
        />
      </div>
      <div className="ce">
        <CodeEditor
          onCodeChange={handleCodeChange}
	  reset={resetCode}
        />
        <div className="preview">
          <h2>Rendu en Direct :</h2>
          {previewCode !== null ? (
            <div className="render-zone" dangerouslySetInnerHTML={{ __html: previewCode }} />
          ) : (
            <p>Aucun code à afficher pour le moment.</p>
          )}
        </div>
        {isTutorialActive && (
          <ModalComponent
            step={tutorialStep}
            onNext={() => handleNext()}
            onPrev={() => handlePrev()}
            onClose={() => setIsTutorialActive(false)}
            maxSteps={maxSteps}
          />
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
