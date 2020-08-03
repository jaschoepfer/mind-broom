import React, { useState } from 'react';
import './App.css';
import SweepList, {ListType} from './domain/SweepList'
import SweepListProvider from './persistence/SweepListProvider.js'
import ActionListDisplay from './displays/ActionListDisplay';

const myList = new SweepList({
  name: 'My List',
  type: ListType.ACTIONS,
  items: [
    {name: 'Take out trash'},
    {name: 'read GTD chapter'}
  ]
})

function App() {

  const [list, setList] = useState(myList)
  const listProvider = new SweepListProvider(list);


  return (
    <div className="App">
      <header className="App-header">
        Sweep your mind!
      </header>
      <main>
        {/*<ActionListDisplay list={list} callbacks={myListProvider.callbacks}/>*/}
      </main>
    </div>
  );
}

export default App;
