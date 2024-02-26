import React, {useState} from "react";

function Counter(){

    const [count, setCounter] = useState(0);

    const increment = () => {
        setCounter(count + 1);
    }
    const decrement = () => {
        setCounter(count - 1);
    }
    const reset = () => {
        setCounter(0);
    }

    return(
        <div>
            <p className="counter-display">{count}</p>
            <button className='creation-button' onClick={decrement}>Decrement</button>
            <button className='creation-button' onClick={reset}>Reset</button>
            <button className='creation-button' onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter