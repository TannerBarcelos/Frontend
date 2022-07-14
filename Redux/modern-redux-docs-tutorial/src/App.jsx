import { useSelector, useDispatch } from 'react-redux';
import './App.css';

// Import all our actions
import {
  increment,
  decrement,
  reset,
  incrementByValue,
} from './features/counter/CounterSlice';

export const App = () => {
  // Create a new dispatch function to enable dispatching actions to redux state
  const dispatch = useDispatch();

  // Hook into and pull out counter state from the redux state
  const { value } = useSelector((state) => state.counter);

  return (
    <div className='App'>
      <h1>Basic React Redux Counter</h1>
      <div className='card'>
        <h3>{value}</h3>
        <button onClick={() => dispatch(increment())}>+</button>
        <button
          onClick={() =>
            dispatch(incrementByValue(Math.floor(Math.random() * 100)))
          }
        >
          By Random
        </button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};
