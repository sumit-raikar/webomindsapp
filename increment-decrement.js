import React, { useReducer } from 'react';

const initialState = 0;
const Counter = () => {

    const [counter, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'INCREMENT': {
                return state + 1;
            }
            case 'DECREMENT': {
                return state - 1;
            }
            default: {
                return state;
            }
        }
    }, initialState);
    return (
        <div>
            Counter value: <span>{counter}</span>
            <button onClikc={() => { dispatch({ type: 'INCREMENT' }) }}>Increment</button>
            <button onClikc={() => { dispatch({ type: 'INCREMENT' }) }}>Decrement</button>
        </div>
    )
}
