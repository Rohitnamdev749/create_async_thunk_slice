import logo from './logo.svg';
import './App.css';
import { increment, decrement } from './redux/DemoSlice';
import { useDispatch, useSelector } from 'react-redux';
import ReducerDemo from './components/ReducerDemo';
import Bonus from './components/Bonus';
function App() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.demo.count)
  console.log(count);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <div><button onClick={()=>dispatch(increment())}>+</button></div>
        <div>{count ?? 0}</div>
        <div><button onClick={()=>dispatch(decrement())}>-</button></div>
      </div>
      <ReducerDemo />
      <Bonus />
    </div>
  );
}

export default App;
