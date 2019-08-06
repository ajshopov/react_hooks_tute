import React from 'react';
import ReactDOM from 'react-dom';
import NoteApp from "./components/NoteApp";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NoteApp />, document.getElementById('root'));




// const App = (props) => {
// // console.log(useState(0)) // returns [`current state value`, `function to update state`]
//   const [count, setCount] = useState(props.count)
//   const [text, setText] = useState('')

//   // like componentdidmount
//   useEffect(() => {
//     console.log('this should only run once')
//   }, [])

//   useEffect(() => {
//     console.log('ran')
//     document.title = count
//   }, [count])
//   return(
//     <div>
//       <p>this is the { text || 'count' }: {count}</p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(props.count)}>reset</button>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   )
// }

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

// App.defaultProps = {
//   count: 10
// }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
