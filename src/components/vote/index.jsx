import React from 'react';

const createOption = name => ({ name : name, votes : 0 });

const testOptions = [
  createOption('A'),
  createOption('B#m'),
  createOption('Csus2'),
  createOption('B/F#')
]

export class VoteZone extends React.Component {

  constructor(props) {
    super(props);
    this.state = {choords : [...testOptions]}
  }

  voteFor(choise) {
    let tmp = [...this.state.choords];
    tmp[choise].votes += 1;
    this.setState({choords : tmp});
  }

  winner() {
    return this.state.choords.reduce(
      (prev, curr) => (curr.votes > prev.votes ? curr : prev)
    )
  }

  render() {
    return (
      <>
        <div className="container">
        <h2>Choord Chooser 2000</h2>
          {
            this.state.choords.map((option, i) => 
              <div key={i} className="voteOption">
                <div className="chordName">
                  {option.name}
                </div>
                <div className="voteCount">
                  {option.votes}
                </div>
                <button onClick={this.voteFor.bind(this, i)}>+1</button>
              </div>
            )
          }
          <div className="voteWinner">
            And the winner is : {this.winner().name}
          </div>
        </div>
      </>
    )
  }
};