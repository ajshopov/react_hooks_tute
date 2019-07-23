import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


const App = (props) => {
// console.log(useState(0)) // returns [`current state value`, `function to update state`]
  const [count, setCount] = useState(props.count)

  return(
    <div>
      <p>this is the count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
    </div>
  )
}

App.defaultProps = {
  count: 10
}

ReactDOM.render(<App count={5} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
