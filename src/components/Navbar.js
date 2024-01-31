import React, { useState } from 'react';

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [showUserName, setShowUserName] = useState(false);

    const getLogo = () => {
	let lien = process.env.PUBLIC_URL + "/logo-42LH.png";
	return (
	    <div>
		<a href="https://www.42lehavre.fr/">
		    <img src={lien} alt="Logo 42" height="60" />
		</a>
	    </div>
	);
    };
    
  const handleTutorialClick = () => {
    // Logique pour lancer le tutoriel
    console.log('Lancer le tutoriel');
  };

  const handleResetClick = () => {
    // Logique pour reset
    console.log('Reset');
    setUserName('');
    setShowUserName(false);
  };

  const handleEnterName = () => {
    const name = prompt('Entrez votre nom :');
    if (name) {
      setUserName(name);
      setShowUserName(true);
    }
  };

  return (
    <header className="App-header">
	{getLogo()}
	<button onClick={handleTutorialClick}>Lancer le Tutoriel</button>
	<button onClick={handleResetClick}>Reset</button>
	<button onClick={handleEnterName}>Entrer le Nom</button>
	{showUserName && <div className="user-name">Bonjour, {userName} !</div>}
    </header>
  );
};

export default Navbar;
