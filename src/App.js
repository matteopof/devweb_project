import './App.css';
import { Tchat } from './components/tchat/index';
import { UserTchat } from './components/tchat/followersTchat';

function App() {
  return (
    <div>
      <Tchat />
      {/* <UserTchat /> */}
    </div>
  );
}

export default App;