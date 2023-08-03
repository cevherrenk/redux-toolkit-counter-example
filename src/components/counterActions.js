
import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount } from "../features/counter/counterSlice";

function CounterActions(){
      const dispatch = useDispatch(); //update global state with useDispatch
      return(
            <div>
                  <button onClick={() => dispatch(decrement())}>Decrement (-)</button>
                  <button onClick={() => dispatch(increment())}>Increment (+)</button>
                  <button onClick={() => dispatch(decrementByAmount(3))}> Decrement by 3 (-)</button>
                  <button onClick={() => dispatch(incrementByAmount(3))}> Increment by 3  (+)</button>
            </div>
      )
}

export default CounterActions;