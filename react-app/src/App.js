import React from 'react';
import './App.css';
import SweepList, {ListType} from './domain/SweepList'
import LocalSweepListProvider from './persistence/LocalSweepListProvider.js'
import ActionListDisplay from './displays/ActionListDisplay';

function App() {
  let myList = new SweepList(ListType.ACTIONS)
  myList.addItem({
    title: 'Take out trash'
  })
  myList.addItem({
    title: 'read GTD chapter'
  })

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
