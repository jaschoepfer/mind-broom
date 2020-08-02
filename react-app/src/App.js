import React from 'react';
import './App.css';
import SweepList, {ListType} from './domain/SweepList'
import SweepListProvider from './persistence/SweepListProvider.js'
import ActionListDisplay from './displays/ActionListDisplay';

function App() {
  const myList = new SweepList({
    name: 'My List',
    type: ListType.ACTIONS,
    items: [
      {name: 'Take out trash'},
      {name: 'read GTD chapter'}
    ]
  })

  const myListProvider = new SweepListProvider(myList);

  return (
    <div className="App">
      <header className="App-header">
        Sweep your mind!
      </header>
      <main>
        <ActionListDisplay callbacks={myListProvider.callbacks}/>
      </main>
    </div>
  );
}

export default App;
