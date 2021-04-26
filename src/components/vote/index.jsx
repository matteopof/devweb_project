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
        <h2>Choord Chooser 2000</h2>
        <div className="container">
          {
            this.state.choords.map((option, i) => 
              <div key={i} className="voteOption">
                <div className="voteCount">
                  {option.votes}
                </div>
                <div className="chordName">
                  {option.name}
                </div>
                <button onClick={this.voteFor.bind(this, i)}>Vote !</button>
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