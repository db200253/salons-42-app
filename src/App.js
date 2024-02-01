import React, { useState, useEffect } from 'react';
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
  const [currentStep, setCurrentStep] = useState(1); // Nouvelle variable d'état
  const maxSteps = 4;

  const handleCodeChange = (code) => {
    setPreviewCode(code);
  };

  const handleNext = () => {
    if (tutorialStep < maxSteps) {
      setTutorialStep(tutorialStep + 1);
      setCurrentStep(tutorialStep + 1); // Met à jour currentStep
    } else {
      setIsTutorialActive(false);
      setCurrentStep(1); // Réinitialise currentStep lorsque le tutoriel se termine
    }
  };

  const handlePrev = () => {
    if (tutorialStep > 1) {
      setTutorialStep(tutorialStep - 1);
      setCurrentStep(tutorialStep - 1); // Met à jour currentStep
    }
  };

  const handleStartTutorial = () => {
    setIsTutorialActive(true);
    setTutorialStep(currentStep); // Commence le tutoriel à l'étape actuelle
  };

  useEffect(() => {
    if (isTutorialActive) {
      setTutorialStep(currentStep); // Met à jour l'étape du tutoriel si currentStep change
    }
  }, [currentStep, isTutorialActive]);

  return (
    <div className="app">
      <div className="hero">
        <Navbar onStartTutorial={handleStartTutorial} />
      </div>
      <div className="ce">
        <CodeEditor onCodeChange={handleCodeChange} />
        <div className="preview">
          {/* Afficher ici la zone de rendu en direct */}
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
