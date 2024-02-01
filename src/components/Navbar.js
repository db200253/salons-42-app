import React from 'react';

const Navbar = () => {

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
  };

  return (
      <header className="App-header">
	<button onClick={handleTutorialClick}>Lancer le Tutoriel</button>
	{getLogo()}
	<button onClick={handleResetClick}>Reset</button>
    </header>
  );
};

export default Navbar;
