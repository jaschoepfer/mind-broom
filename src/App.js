import React, {useState, useEffect} from 'react';
import PouchDB from 'pouchdb'
import './App.css';
import ActionList from './elements/ActionList';


function addTodo(db, text, todoIDCtr) {
  var todo = {
    _id: '' + todoIDCtr,
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
  return todoIDCtr + 1
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
  var todoIDCtr = 0
  todoIDCtr = addTodo(db, 'Take out trash', todoIDCtr)
  todoIDCtr = addTodo(db, 'read DDD', todoIDCtr)

  const dbObj = {
    showTodos: function(cb){ showTodos(db, cb) }
  }

  return <AppDisplay db={dbObj}/>
}
