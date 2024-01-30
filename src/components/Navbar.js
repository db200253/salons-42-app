import React, { useState } from 'react';

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [showUserName, setShowUserName] = useState(false);

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
    <header class="App-header">
	<div className="logo">Logo</div>
	<button onClick={handleTutorialClick}>Lancer le Tutoriel</button>
	<button onClick={handleResetClick}>Reset</button>
	<button onClick={handleEnterName}>Entrer le Nom</button>
	{showUserName && <div className="user-name">Bonjour, {userName} !</div>}
    </header>
  );
};

export default Navbar;
