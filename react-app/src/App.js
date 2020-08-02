import React from 'react';
import './App.css';
import SweepList, {ListType} from './domain/SweepList'
import LocalSweepListProvider from './persistence/SweepListProvider.js'
import ActionListDisplay from './displays/ActionListDisplay';

function App() {
  let myList = new SweepList({
    name: 'My List',
    type: ListType.ACTIONS
  })
  myList.items.push({name: 'Take out trash'})
  myList.items.push({name: 'read GTD chapter'})

  //myListProvider = new LocalSweepListProvider(myList)

  return (
    <div className="App">
      <header className="App-header">
        Sweep your mind!
      </header>
      <main>
        {/*<ActionListDisplay provider={myListProvider}/>*/}
      </main>
    </div>
  );
}

export default App;
