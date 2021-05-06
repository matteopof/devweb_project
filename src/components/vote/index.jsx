import React, {useEffect, useState} from 'react';

const voteStartValue = 70; // initial value for vote options
const voteWinValue = 100;  // value to reach for win a vote
const voteTimeout = 500; // Delay between to random votes

const createOption = name => ({ name : name, votes : voteStartValue });

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
  const tmp = votesArray.filter(vote => (voteWinValue <= vote.votes));
  if (0 === tmp.length) {
    return null;
  } else {
    return tmp.reduce((prev, curr) => (curr.votes > prev.votes ? curr : prev))
  }
};

const classof = (option, winner) => {
  const baseclass = "voteOption row row-centered";
  const winnerclass = baseclass + " voteWinner";
  return winner === option ? winnerclass : baseclass
}

export const VoteZone = () => {

  const [seconds, setSeconds] = useState(0);
  const win = winner();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
      if (null === winner()) {
          let ran = Math.floor(Math.random() * 4)
          console.log(ran);
          voteFor(ran);
        }
      }, voteTimeout);
      return () => clearInterval(interval);
    }, []);

  return (
    <>
      <div id="choord" className="container text-center column spacearound ">
      <h2 className="chordTitle">Choord Chooser 2000</h2>
        {
          votesArray.map((option, i) => 
            <div key={i} className={classof(option, win)}>
              <div className="chordName">
                <span>{option.name}</span>
              </div>
              <div className="voteCount column column-centered">
                <span>{option.votes}</span>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
};