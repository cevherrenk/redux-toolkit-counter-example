
import React from 'react';
import {useSelector} from 'react-redux';

function Counter(){
      const count = useSelector(state => state.counter.value) // read data from global state with use selector
      return (
            <div>
                  {count}
            </div>
      )
}

export default Counter;