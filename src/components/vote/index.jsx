import React, {useEffect, useState} from 'react';

const createOption = name => ({ name : name, votes : 0 });

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
  return votesArray.reduce(
    (prev, curr) => (curr.votes > prev.votes ? curr : prev)
  )
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

  return (
    <>
      <div id="choord" className="container text-center column spacearound ">
      <h2 className="chordTitle">Choord Chooser 2000</h2>
        {
          votesArray.map((option, i) => 
            <div key={i} className="voteOption row row-centered">
              <div className="chordName">
                <span>{option.name}</span>
              </div>
              <div className="voteCount column column-centered">
                <span>{option.votes}</span>
              </div>
            </div>
          )
        }
        <div className="voteWinner">
          And the winner is : {winner().name}
        </div>
      </div>
    </>
  )
};