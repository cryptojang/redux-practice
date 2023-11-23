import { useDispatch, useSelector } from "react-redux";
import {
  asyncUpFetch,
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./countSlice";
import { useState } from "react";

const App = () => {
  const { count } = useSelector((state) => state.countReducer); //state는 store의 reducer 의미한다고 보면 됨.
  const dispatch = useDispatch(); //useParmas비슷
  const [newAmount, setNewAmount] = useState(0);

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center ">
      <div className="text-6lx">{count}</div>
      <div className="mt-8 text-2xl flex gap-8">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(+newAmount))}>
          incrementByAmount
        </button>

        <input
          type="text"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
        />

        <button onClick={(e) => dispatch(decrementByAmount(100))}>
          decrementByAmount
        </button>
        <button onClick={() => dispatch(asyncUpFetch())}>asyncUpFetch</button>
      </div>
    </div>
  );
};

export default App;
