import React from 'react';

const Navbar = ({ onStartTutorial, onResetTutorial, onResetCode }) => {

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
    

  const handleResetClick = () => {
      onResetTutorial();
      onResetCode();
  };

  return (
      <header className="App-header">
	<button onClick={onStartTutorial}>Lancer le Tutoriel</button>
	{getLogo()}
	<button onClick={handleResetClick}>Reset</button>
    </header>
  );
};

export default Navbar;
