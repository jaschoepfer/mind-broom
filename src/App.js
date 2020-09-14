import React, {useState, useEffect} from 'react';
import PouchDB from 'pouchdb'
import ActionList from './elements/ActionList';


function addTodo(db, text, todoID) {
  var todo = {
    _id: '' + todoID,
    title: text,
    completed: false
  };
  db.put(todo, function callback(err, result) {
    if (err) {
      console.log('Error while posting todo (' + text + ', ' + todoID + '): ' + err)
    }
  });
}

function showTodos(db, callback) {
  db.allDocs({include_docs: true, descending: true}, function(err, doc) {
    if (!err) {
      var todos = doc.rows.map(row => row.doc.title)
      callback(todos)
    } else {
      console.log('Error while loading todos: ' + err)
    }
  });
}

function* idMaker() {
  var idCtr = 0
  while (true) {
    yield idCtr
    idCtr += 1
  }
}

export function AppDisplay(props) {

  const [todos, updateTodos] = useState([])
  useEffect(function(){
    props.db.showTodos(updateTodos)
  }, [props.db])

  return (
    <div style={appStyle}>
      <header style={appHeaderStyle}>
        Sweep your mind!
      </header>
      <main style={appBodyStyle}>
        <ActionList actions={todos} addTodo={props.db.addTodo}/>
      </main>
    </div>
  );
}

const appStyle = {
  'display': 'flex',
  'flex-direction': 'column',
  'height': '100%'
}

const appHeaderStyle = {
  'background-color': '#282c34',
  'min-height': '10vh',
  'text-align': 'center',
  'font-size': 'calc(10px + 2vmin)',
  'color': 'white'
}

const appBodyStyle = {
  'flex-grow': '1'
}

function App() {
  var db = new PouchDB('todos');
  var ids = idMaker();
  addTodo(db, 'Take out trash', ids.next().value);
  addTodo(db, 'read DDD', ids.next().value);

  const dbObj = {
    showTodos: function(cb){ showTodos(db, cb) },
    addTodo: function(text){ addTodo(db, text, ids.next().value)}
  }

  return <AppDisplay db={dbObj}/>
}

export default App