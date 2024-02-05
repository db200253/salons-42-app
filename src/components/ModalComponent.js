import React from 'react';

const ModalComponent = ({ step, onNext, onPrev, onClose, maxSteps }) => {
  const content = getContentForStep(step);

  const imageStyle = {
    height: step === maxSteps ? 120 : 300,
  };
    
  return (
    <div className="modal">
      {/* Contenu spécifique à chaque étape */}
      <h3>{content.title}</h3>
      <div>
          <img src={content.image} alt={`Étape ${step}`} style={imageStyle} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: content.htmlCode }} />
      <div className="boutons">
	  <button onClick={onPrev} disabled={step === 1}>Précédent</button>
	  <button onClick={onNext} disabled={step === maxSteps}>Suivant</button>
	  {/* Bouton Fermer */}
	  <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

const getContentForStep = (step) => {
  switch (step) {
    case 1:
      return {
        title: 'Donner un titre',
        image: process.env.PUBLIC_URL + '/h1.png',
        htmlCode: "<div><p>Te voilà désormais plongé dans l'univers du HTML. <br />L'idéal pour commencer ? Donner un titre ! Cela se fait de la manière suivante : &lt;h1&gt;Texte à afficher&lt;/h1&gt;. <br />Essaie de le faire par toi-même en étant original !</p></div>",
      };
    case 2:
      return {
        title: 'Ajouter une image',
        image: process.env.PUBLIC_URL + '/img.png',
        htmlCode: "<div><p>Après avoir ajouté un titre, pourquoi ne pas utiliser une image ? Dans une page web il est très fréquent de voir cela. <br />Pour mettre une image il faut la balise img, le lien de l'image, une description et éventuellement une taille !<br />Je te laisse observer l'exemple ci-dessus (et un lien valide) pour comprendre ce qu'il faut faire ! N'hésite pas à modifier la taille !</p></div>",
      };
    case 3:
      return {
        title: 'Créer un tableau',
        image: process.env.PUBLIC_URL + '/tab.png',
        htmlCode: "<div><p>Maintenant que ces deux composants sont crées et que tu peux observer le résultat de ton travail, faisons un tableau simple dans lequel tu mettras les informations que tu voudras. <br />La structure sera toujours la même : table permet de créer un tableau, tr permet d'avoir une ligne de tableau, th correspond aux noms des colonnes et td permet de rentrer les données correspondantes. Comme depuis le début, n'hésite pas à être original ! </p></div>",
      };
    case 4:
      return {
        title: 'Ajouter de la couleur',
        image: process.env.PUBLIC_URL + '/css.png',
        htmlCode: "<div><p>Pas mal du tout ! Mais il manque quelque chose n'est-ce pas ? La couleur et le style en général ! Ci-dessus tu as des exemples pour modifier certaines propriétés de style. La seule limite que tu as pour cette partie est ta créativité : sois curieux comme on le demande à 42 et essaie différentes propriétés, la seule chose à savoir est que toute les balises html (table, h1, etc...) peuvent avoir un style différent de celui par défaut !</p></div>",
      };
  case 5:
      return {
	  title: 'Suis nous sur les réseaux !',
	  image: process.env.PUBLIC_URL + '/logo-42LH.png',
	  htmlCode: `<div><p>Si tu as apprécié cet atelier n'hésite pas ! 42 Le Havre est fait pour toi, viens tenter ta chance pour vivre cette magnifique aventure ! <br /> N'hésite pas à nous suivre sur les réseaux ! <br /><div class='logos'><a href='https://www.instagram.com/42_lehavre/'><img src="${process.env.PUBLIC_URL}/insta.png" alt='Instagram' height=80 /></a><a href='https://www.tiktok.com/@42lehavre'><img src="${process.env.PUBLIC_URL}/tiktok.png" alt='Tiktok' height=80 /></a><a href='https://www.facebook.com/42LeHavre'><img src="${process.env.PUBLIC_URL}/facebook.png" alt='Facebook' height=80 /></a><a href='https://www.linkedin.com/school/42-le-havre/'><img src="${process.env.PUBLIC_URL}/linkedin.png" alt='Linkedin' height=80 /></a></div></p></div>`,
      };

    default:
      return {};
  }
};

export default ModalComponent;
