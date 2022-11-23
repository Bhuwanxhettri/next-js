import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-center items-center my-64">
        <div>
          <button
            aria-label="Increment value"
            className="bg-red-600 px-5 text-white cursor-pointer mx-5"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            className="bg-red-600 px-5 text-white cursor-pointer mx-5"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
