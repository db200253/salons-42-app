import React from 'react';

const ModalComponent = ({ step, onNext, onPrev, onClose, maxSteps }) => {
  const content = getContentForStep(step);
    
  return (
    <div className="modal">
      {/* Contenu spécifique à chaque étape */}
      <h3>{content.title}</h3>
      <div>
        <img src={content.image} alt={`Étape ${step}`} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: content.htmlCode }} />
      {/* Boutons Suivant/Précédent */}
      <button onClick={onPrev} disabled={step === 1}>Précédent</button>
      <button onClick={onNext} disabled={step === maxSteps}>Suivant</button>
      {/* Bouton Fermer */}
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

const getContentForStep = (step) => {
  switch (step) {
    case 1:
      return {
        title: 'Première étape',
        image: 'url_de_votre_image1.jpg',
        htmlCode: '<div><p>Code HTML pour la première étape</p></div>',
      };
    case 2:
      return {
        title: 'Deuxième étape',
        image: 'url_de_votre_image2.jpg',
        htmlCode: '<div><p>Code HTML pour la deuxième étape</p></div>',
      };
    default:
      return {};
  }
};

export default ModalComponent;
