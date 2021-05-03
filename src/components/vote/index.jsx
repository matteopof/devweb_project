import React, {useEffect, useState} from 'react';

const createOption = name => ({ name : name, votes : 48 });

const votesArray = [
  createOption('A'),
  createOption('B#m'),
  createOption('Csus2'),
  createOption('B/F#')
];

const voteFor = (choise) => {
  votesArray[choise].votes += 1;
};

const winner = () => {
  const tmp = votesArray.filter(vote => (50 <= vote.votes));
  if (0 == tmp.length) {
    return null;
  } else {
    return tmp.reduce((prev, curr) => (curr.votes > prev.votes ? curr : prev))
  }
};

export const VoteZone = () => {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        let ran = Math.floor(Math.random() * 4)
          console.log(ran);
          voteFor(ran);
      }, 1000);
      return () => clearInterval(interval);
    }, []);

  const win = winner();

  return (
    <>
      <div className="container">
      <h2 className="chordTitle">Choord Chooser 2000</h2>
        {
          votesArray.map((option, i) => 
            <div key={i} className={win === option ? "voteOption voteWinner" : "voteOption"}>
              <div className="chordName">
                {option.name}
              </div>
              <div className="voteCount">
                {option.votes}
              </div>
            </div>
          )
        }
      </div>
    </>
  )
};