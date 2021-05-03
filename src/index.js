import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/chat/chat.css';
import './components/component_sub_bar/sub_bar.css';
import './components/reactions/vote.css';

import App from './App';
import { Chat } from './components/chat/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { SubBar } from './components/component_sub_bar/index';
import { Vote } from './components/reactions/index';
import { VoteZone } from './components/vote/index';

const Routing = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/chat" component={Chat} />
        <Route path="/subbar" component={SubBar} />
        <Route path="/reaction" component={Vote} />
        <Route path="/vote" component={VoteZone} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
