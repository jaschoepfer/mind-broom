import React, {useState, useEffect} from 'react';
import PouchDB from 'pouchdb'
import './App.css';
import ActionList from './elements/ActionList';


function addTodo(db, text, todoID) {
  var todo = {
    _id: '' + todoID,
    title: text,
    completed: false
  };
  db.put(todo, function callback(err, result) {
    if (!err) {
      console.log('Successfully posted a todo: ' + text);
    } else {
      console.log('Error while posting todo: ' + err)
    }
  });
}

function showTodos(db, callback) {
  db.allDocs({include_docs: true, descending: true}, function(err, doc) {
    if (!err) {
      var todos = doc.rows.map(row => row.doc.title)
      callback(todos)
    } else {
      console.log('Error while loading files: ' + err)
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
    <div className="App">
      <header className="App-header">
        Sweep your mind!
      </header>
      <main>
        <ActionList actions={todos}/>
      </main>
    </div>
  );
}

export default function App() {
  var db = new PouchDB('todos');
  var ids = idMaker();
  addTodo(db, 'Take out trash', ids.next());
  addTodo(db, 'read DDD', ids.next());

  const dbObj = {
    showTodos: function(cb){ showTodos(db, cb) }
  }

  return <AppDisplay db={dbObj}/>
}
