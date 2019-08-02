import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
  const notesData = JSON.parse(localStorage.getItem('data'))
  const [notes, setNotes] = useState(notesData || []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(notes));
  })

  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes, { title, body }
    ])
    setTitle('')
    setBody('')
  }

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title))
  }

  return (
    <div>
      <h1>title</h1>
      {notes.map((note) => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>x</button>
        </div>
      ))}
      <p>add note</p>
      <form onSubmit={addNote}>
        <input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
        <button>add note</button>
      </form>
    </div>
  )
}

const App = (props) => {
// console.log(useState(0)) // returns [`current state value`, `function to update state`]
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('')

  useEffect(() => {
    document.title = count
  })
  return(
    <div>
      <p>this is the { text || 'count' }: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

// const App = (props) => {
//   // console.log(useState(0)) // returns [`current state value`, `function to update state`]
//   const [state, setState] = useState({
//     count: props.count,
//     text: ''
//   })
//   return (
//     <div>
//       <p>this is the {state.text || 'count'}: {state.count}</p>
//       <button onClick={() => setState({...state, count: state.count + 1})}>+1</button>
//       <button onClick={() => setState({...state, count: props.count })}>reset</button>
//       <button onClick={() => setState({...state, count: state.count - 1 })}>-1</button>
//       <input value={state.text} onChange={(e) => setState({...state, text: e.target.value})} />
//     </div>
//   )
// }

App.defaultProps = {
  count: 10
}

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
