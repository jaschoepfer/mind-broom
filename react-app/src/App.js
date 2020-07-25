import React from 'react';
import './App.css';
import './elements/ActionList'
import ActionList from './elements/ActionList';

function App() {
  let TODOs = ['Take out trash', 'read GTD chapter']

  return (
    <div className="App">
      <header className="App-header">
        Sweep your mind!
      </header>
      <main>
        <ActionList actions={TODOs}/>
      </main>
    </div>
  );
}

export default App;
