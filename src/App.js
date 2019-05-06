import React from 'react';
import GameContainer from './containers/GameContainer'
import GameMenu from './containers/GameMenu'

function App() {
  return (
    <div className="App">
      <GameMenu />
      <GameContainer />
    </div>
  );
}

export default App;
