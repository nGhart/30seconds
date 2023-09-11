import React, { useState, useEffect } from 'react';

const App = () => {
  const guesses = [
    {
      category: 'Media Personalities',
      g1: 'Berla Mundi',
      g2: 'Gifty Anti',
      g3: 'Kwami S Kayi',
      g4: 'Delores F Manso',
      g5: 'Paul A Otchere',
      id: 1,
    },
    {
      category: 'Celebrities',
      g1: 'Stonebwoy',
      g2: 'Samini',
      g3: 'Hajia 4Real',
      g4: 'LilWin',
      g5: 'Joselyn Dumas',
      id: 2,
    },
    {
      category: 'Politicians',
      g1: 'Ursula Owusu',
      g2: 'Kojo O Nkrumah',
      g3: 'Asiedu Nketiah',
      g4: 'Cecilia Dapaah',
      g5: 'Sam O Ablakwa',
      id: 3,
    },
    {
      category: 'Places',
      g1: 'Mole National Park',
      g2: 'Skybar',
      g3: 'Cape Coast',
      g4: `'Counterback'`,
      g5: 'National Theatre',
      id: 4,
    },
    {
      category: 'Television',
      g1: 'Suncity',
      g2: 'Home Sweet Home',
      g3: 'Date Rush',
      g4: 'Di Asa',
      g5: 'Inspector Bediako',
      id: 5,
    },
    {
      category: 'Media Personalities',
      g1: 'Jessica Opare-Saforo',
      g2: 'Lexis Bill',
      g3: 'Giovani Caleb',
      g4: 'Bernard K Avle',
      g5: 'Bola Ray',
      id: 6,
    },
    {
      category: 'Lifestyle',
      g1: 'Greeting',
      g2: 'Highlife',
      g3: 'On the Run',
      g4: 'Adowa',
      g5: 'Jollof',
      id: 7,
    },
    {
      category: 'Politicians',
      g1: 'Alan Kyeremanteng',
      g2: 'Harry Maguire',
      g3: 'Sam George',
      g4: 'James Quayson',
      g5: 'John Dumelo',
      id: 8,
    },
    {
      category: 'Food',
      g1: 'Kokonte',
      g2: 'Gobe',
      g3: 'Kelewele',
      g4: 'Check Ckeck',
      g5: 'Omotuo',
      id: 9,
    },
    {
      category: 'Lifestyle',
      g1: 'Hogbetsotso',
      g2: 'Waakye',
      g3: 'Trotro',
      g4: 'Harmattan',
      g5: 'Kosua ne Meko',
      id: 10,
    },
    {
      category: 'Celebrities',
      g1: 'Jackie Appiah',
      g2: 'Sarkodie',
      g3: 'Medikal',
      g4: 'Nana Ama McBrown',
      g5: 'John Dumelo',
      id: 11,
    },
    {
      category: 'Places',
      g1: 'Aqua Safari',
      g2: 'Kwahu',
      g3: 'Marvels',
      g4: 'Republic',
      g5: 'Nzulezu',
      id: 12,
    },
    {
      category: 'Musicians',
      g1: 'Okyeame Kwame',
      g2: 'KiDi',
      g3: 'Efya',
      g4: 'Pappy Kojo',
      g5: 'Black Sherif',
      id: 13,
    },
    {
      category: 'Pop Culture',
      g1: 'Wanderlust Ghana',
      g2: 'ECG',
      g3: 'ghanatwitter',
      g4: 'BODMAS',
      g5: 'Detty Rave',
      id: 14,
    },
    {
      category: 'Film',
      g1: `Adam's Apples`,
      g2: 'Keteke',
      g3: '4 Play',
      g4: 'Perfect Picture',
      g5: 'Aloe Vera',
      id: 15,
    },
    {
      category: 'Places',
      g1: 'Okponglo',
      g2: 'Labadi Beach',
      g3: 'Efua Sutherland Park',
      g4: 'Takoradi',
      g5: 'Honeysuckle',
      id: 16,
    },
    {
      category: 'Television',
      g1: 'Taxi Driver',
      g2: 'Dede',
      g3: 'Accra Medics',
      g4: 'YOLO',
      g5: 'Talented Kids',
      id: 17,
    },
    {
      category: 'Film',
      g1: 'Princess Tyra',
      g2: 'Beyonce',
      g3: 'Crime to Christ',
      g4: `Mummy's Daughter`,
      g5: 'Single and Married',
      id: 18,
    },
    {
      category: 'In the Streets',
      g1: 'Floods',
      g2: 'Roasted Plantain',
      g3: 'Traffic',
      g4: 'Sachet Water',
      g5: 'Kosua ne Meko',
      id: 19,
    },
    {
      category: 'Celebrities',
      g1: 'Wendy Shay',
      g2: 'Yvonne Okoro',
      g3: 'Juliet Ibrahim',
      g4: 'Shatta Wale',
      g5: 'Nadia Buari',
      id: 20,
    },
  ];
  const maxTurnsPerTeam = 5;

  const [currentTeam, setCurrentTeam] = useState('A');
  const [currentTurn, setCurrentTurn] = useState(1);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [showNext, setShowNext] = useState('none');
  const [showTimer, setShowTimer] = useState('none');
  const [showTurn, setShowTurn] = useState('block');
  const [timer, setTimer] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [turnStarted, setTurnStarted] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState(Array(5).fill(false));
  const hideStart = () => {
    setHideStartPage('none');
  };
  useEffect(() => {
    if (currentTurn > maxTurnsPerTeam * 2) {
      setGameOver(true);
      setShowNext('none');
      setShowTurn('none');
    } else {
      setTimer(30);
      setTurnStarted(false);
    }
  }, [currentTurn]);

  useEffect(() => {
    let countdown;
    if (timer > 0 && !gameOver && turnStarted) {
      countdown = setTimeout(() => setTimer(timer - 1), 1000);
    } else if (timer === 0 && !gameOver && turnStarted) {
      setShowNext('block');
      switchTurn();
      setShowTimer('none');
    }

    return () => {
      clearTimeout(countdown);
    };
  }, [timer, gameOver, turnStarted]);

  const getRandomGuess = () => {
    const randomIndex = Math.floor(Math.random() * guesses.length);
    return guesses[randomIndex];
  };

  const switchTurn = () => {
    setCurrentTeam(currentTurn % 2 === 1 ? 'B' : 'A');
  };

  const handleStartTurn = () => {
    hideStart();
    setShowNext('none');
    setShowTimer('block');
    setTurnStarted(true);
    setCurrentGuess(getRandomGuess());
    setDisabledButtons(Array(5).fill(false));
  };

  const handleScore = (buttonIndex) => {
    const updatedDisabledButtons = [...disabledButtons];
    updatedDisabledButtons[buttonIndex] = true;
    setDisabledButtons(updatedDisabledButtons);

    if (currentTeam === 'A') {
      setTeamAScore(teamAScore + 1);
    } else {
      setTeamBScore(teamBScore + 1);
    }
  };

  const handleCorrectGuess = () => {
    setTurnStarted(false);
    setShowNext('block');
    setShowTimer('none');
    setCurrentTurn(currentTurn + 1);
    switchTurn();
    setDisabledButtons(Array(5).fill(true));
  };
  const pickWinner = (teamAScore, teamBScore) => {
    if (teamAScore === 0 && teamBScore === 0) {
      return <span>Try Again</span>;
    } else if (teamAScore > teamBScore) {
      return <span className="winner">Team A wins!!!</span>;
    } else if (teamAScore < teamBScore) {
      return <span className="winner">Team B wins!!!</span>;
    } else {
      return <span className="winner">Everybody is a Winner!!!</span>;
    }
  };
  console.log('current turn ' + currentTurn);
  console.log('current team' + currentTeam);
  console.log('team a 1naa' + teamAScore);
  console.log('team b 2marie' + teamBScore);
  console.log(typeof teamAScore);
  console.log(typeof teamBScore);
  const [hideStartPage, setHideStartPage] = useState('block');

  return (
    <div className="App">
      <div className="start" style={{ display: hideStartPage }}>
        <div className="title">
          <h1 className="font3">30 seconds</h1>
          <h2 className="font4">Ghanaian Edition</h2>
        </div>
        <div className="instructions">
          <div className="instructionContainer">
            <h1 className="font2">Guessing game for teams</h1>
            <div className="instructionText font1">
              <h4>INSTRUCTIONS :</h4>
              <ul>
                <li>The game is played in two teams</li>
                <li>For each turn you will have 5 words to describe</li>
                <li>
                  Each team will appoint a person to do the description while
                  the others try to guess the word within 30 seconds. They are
                  not allowed to use any part of the given word in the
                  description
                </li>
                <li>Every correct guess is 1 point</li>
                <li>The team with most points wins</li>
              </ul>
            </div>
            <button className="startGame font3" onClick={handleStartTurn}>
              <p> Start</p>
            </button>
          </div>
        </div>
      </div>
      <div className="game">
        <div className="title">
          <h1 className="font3">30 seconds</h1>
          <h2 className="font4">Ghanaian Edition</h2>
        </div>

        <div className="gameBoard">
          {gameOver ? (
            <div>
              <h2 className="font3">Game Over</h2>
              <p className="font4">Team A: {teamAScore}</p>
              <p className="font4">Team B: {teamBScore}</p>
              <h1 className="font2">{pickWinner(teamAScore, teamBScore)}</h1>

              <button
                className=" font3 startTurnButton"
                onClick={() => window.location.reload()}
              >
                PLAY AGAIN
              </button>
            </div>
          ) : (
            <div className="gamePlay">
              <h3 className="font4">Round {Math.ceil(currentTurn / 2)}</h3>
              <h1 className="font1" style={{ display: showTurn }}>
                Team {currentTeam}'s Turn
              </h1>

              <h3 className="font1" style={{ display: showNext }}>
                Next
              </h3>
              <button className="timer font3" style={{ display: showTimer }}>
                {timer} s
              </button>
              <p className="font3">{currentGuess.category}</p>
              <div className="guessContainer ">
                <button
                  className="guessButtons"
                  disabled={disabledButtons[0]}
                  onClick={() => handleScore(0)}
                >
                  {currentGuess.g1}
                </button>
                <button
                  className="guessButtons"
                  disabled={disabledButtons[1]}
                  onClick={() => handleScore(1)}
                >
                  {currentGuess.g2}
                </button>
                <button
                  className="guessButtons"
                  disabled={disabledButtons[2]}
                  onClick={() => handleScore(2)}
                >
                  {currentGuess.g3}
                </button>
                <button
                  className="guessButtons"
                  disabled={disabledButtons[3]}
                  onClick={() => handleScore(3)}
                >
                  {currentGuess.g4}
                </button>
                <button
                  className="guessButtons"
                  disabled={disabledButtons[4]}
                  onClick={() => handleScore(4)}
                >
                  {currentGuess.g5}
                </button>
              </div>
              {!turnStarted ? (
                <button
                  className=" font3 startTurnButton"
                  onClick={handleStartTurn}
                >
                  Start Turn
                </button>
              ) : (
                <>
                  <h2></h2>

                  <button className="doneButton" onClick={handleCorrectGuess}>
                    Next
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>{' '}
    </div>
  );
};

export default App;
